import * as React from 'react';
import { keyframes } from '@emotion/core';
import styled, { CSSObject } from '@emotion/styled';

import { IThemedProps, ITheme } from '../../theme';

const BlinkCursor = keyframes({
  '0%': { opacity: 1 },
  '49%': { opacity: 1 },
  '50%': { opacity: 0 },
  '100%': { opacity: 0 },
});

const Container = styled.div<IThemedProps>({
  border: 'solid 1px #fff',
  width: 250,
  height: 250,
  '& > svg': {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '0.3px',
    strokeLinejoin: 'round',
  },
});

const sharedTSpanStyles: CSSObject = {
  fill: 'currentColor',
  strokeWidth: '0px',
  lineHeight: '1.4em',
  fontSize: 2.1,
  fontWeight: 700,
  fontFamily: 'Courier new',
};

const LineStartText = styled.tspan(sharedTSpanStyles);

// These need to be theme colours
function getExtraStylesFromType(theme: ITheme, type?: TPhraseStyle): CSSObject {
  switch (type) {
    case 'quote':
      return { fontStyle: 'italic', fill: theme.info };
    case 'comment':
      return { fill: theme.success };
    case 'danger':
      return { fill: theme.error };
    case 'happy':
      return { fill: theme.warning };
    default:
      return { fill: 'currentColor' };
  }
}

const PhraseText = styled.tspan<IThemedProps & { type?: TPhraseStyle }>(({ theme, type }) => ({
  ...sharedTSpanStyles,
  ...getExtraStylesFromType(theme, type),
}));

const Cursor = styled.tspan<{ isTyping: boolean; type: TPhraseStyle } & IThemedProps>(({ isTyping, type, theme }) =>
  isTyping
    ? { ...sharedTSpanStyles, ...getExtraStylesFromType(theme, type) }
    : {
        ...sharedTSpanStyles,
        ...getExtraStylesFromType(theme, type),
        animation: `${BlinkCursor} 0.5s infinite alternate linear`,
      }
);

const HeadphoneBar = styled.rect<IThemedProps>(({ theme }) => ({
  fill: theme.background02,
}));

type TPhraseStyle = 'quote' | 'comment' | 'danger' | 'happy' | undefined;

interface IPhrase {
  content: string;
  style?: TPhraseStyle;
}

const SpacerContent = '....';
const SpacerTypeDelay = 500;

const MinimumTypeDelay = 6_000;
const RandomTypeDelay = 5_000;
const CharacterTypeDelay = 100;

const phrases: IPhrase[] = [
  { content: `// To my future Self`, style: 'comment' },
  { content: `// Sorry for the mess`, style: 'comment' },
  { content: SpacerContent },
  { content: `Why did I write this?...` },
  { content: `... I must have been 🍺...`, style: 'happy' },
  { content: `I can get you a toe Dude`, style: 'quote' },
  { content: SpacerContent },
  { content: SpacerContent },
  { content: `git commit --no-verify ;)`, style: 'danger' },
  { content: `I'm a genius!` },
  { content: `wingardium leviosa!`, style: 'quote' }, // HP
  { content: SpacerContent },
  { content: SpacerContent },
  { content: `I'm a moron` },
  { content: `// Todo - fix this mess`, style: 'comment' },
  { content: `release zalgo! 👻👻👻`, style: 'danger' },
  { content: `MUAHAHAHAHAHAH!`, style: 'quote' },
  { content: `😬` },
  { content: `everything is awesome`, style: 'quote' }, // Lego movie
  { content: `sudo brain restart`, style: 'danger' },
  { content: SpacerContent },
  { content: SpacerContent },
  { content: `These are O.R. scrubs`, style: 'quote' }, // Rushmore
  { content: '😢' },
  { content: `😡😡😡` },
  { content: `ARRRRRRGGGGHHHHHH!!!!!` },
  { content: `Of course my horse` },
  { content: `...need more tea...`, style: 'happy' },
  { content: SpacerContent },
  { content: SpacerContent },
  { content: `Oh I would walk 500 miles`, style: 'quote' },
  { content: `and I would walk 500 more`, style: 'quote' },
  { content: `Maybe I should've used gsap` },
  { content: SpacerContent },
  { content: `😍... thank you tests!`, style: 'happy' },
  { content: `git please work --force`, style: 'danger' },
  { content: `To ${Number.POSITIVE_INFINITY.toString()} and beyond!`, style: 'quote' },
  { content: SpacerContent },
  { content: SpacerContent },
  { content: `Is that how javascript works?` },
  { content: `Could be, who knows?`, style: 'quote' }, // somethings coming
  { content: `I need a holiday` },
  { content: `a very long holiday` },
  { content: SpacerContent },
  { content: SpacerContent },
];

function loopIndex(start: number): number {
  return start % phrases.length;
}

const MainAppImage = () => {
  const [index, setIndex] = React.useState(() => Math.floor(Math.random() * phrases.length));
  const [currentPhrase, setCurrentPhrase] = React.useState<IPhrase>({ content: '' });
  const [typing, setTyping] = React.useState(false);

  const firstPhrase = phrases[loopIndex(index)];
  const secondPhrase = phrases[loopIndex(index + 1)];
  const thirdPhrase = phrases[loopIndex(index + 2)];

  React.useEffect(() => {
    const phraseToType = phrases[loopIndex(index + 3)];
    const chars = phraseToType.content.split('');
    const style = phraseToType.style;

    let charIndex = 1;
    let timeoutHandle: number | undefined = undefined;

    function typeChar() {
      timeoutHandle = window.setTimeout(() => {
        setCurrentPhrase({ content: chars.slice(0, charIndex).join(''), style });

        if (charIndex < chars.length) {
          charIndex++;
          typeChar();
        } else {
          setTyping(false);

          const timeOutLength = Math.floor(Math.random() * RandomTypeDelay + MinimumTypeDelay);

          timeoutHandle = window.setTimeout(
            () => {
              setIndex((s) => s + 1);
              setCurrentPhrase({ content: '' });
              timeoutHandle = undefined;
            },
            phraseToType.content === SpacerContent ? SpacerTypeDelay : timeOutLength
          );
        }
      }, CharacterTypeDelay);
    }

    typeChar();
    setTyping(true);

    return () => clearTimeout(timeoutHandle);
  }, [index]);

  return (
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 6 46 48">
        <defs />
        <g transform="translate(0 -244)">
          <path d="M14.6 282.4h15.9v1.3H14.6zM15.9 283.8h1.3v11.9h-1.3z" />
          <rect width="7.9" height=".8" x="21.2" y="281.1" ry=".3" />
          <rect width=".8" height="6.1" x="-65.7" y="268.1" ry=".3" transform="rotate(-18)" />
          <path d="M33.1 286.4h9.3v1.3h-9.3zM33.1 287.7h1.3v7.9h-1.3zM41 287.7h1.3v7.9H41zM41 274.5h1.3v11.9H41z" />
          <path d="M26.5 294.4h1.3m1.3-8l8-1.3v-8" />
          <path d="M37 279.8l-5.3.5-4 .8" />
          <path d="M37 279.8h-5.3l-4 1.3M37 285l-6.6 1.4-1.3 2.1m-1.3 2.4l-1.3 2.1H25" />
          <ellipse cx="37" cy="274" rx="2.6" ry="3.3" />
          <path d="M27.8 283.8h1.3v11.9h-1.3z" />
          <rect width="41" height="15.2" x="5.3" y="251" ry="1.3" />
          <path d="M5.3 252.3h41" />
          <text x="6.1" y="255.2">
            <LineStartText x="6.1" y="255.2">
              >{' '}
              <PhraseText type={firstPhrase.style} id="textLine1">
                {firstPhrase.content}
              </PhraseText>
            </LineStartText>
            <LineStartText x="6.1" y="258">
              >{' '}
              <PhraseText type={secondPhrase.style} id="textLine2">
                {secondPhrase.content}
              </PhraseText>
            </LineStartText>
            <LineStartText x="6.1" y="260.8">
              >{' '}
              <PhraseText type={thirdPhrase.style} id="textLine1">
                {thirdPhrase.content}
              </PhraseText>
            </LineStartText>
            <LineStartText x="6.1" y="263.7">
              >{' '}
              <PhraseText type={currentPhrase.style} id="textLine1">
                {currentPhrase.content}
              </PhraseText>
            </LineStartText>
            <Cursor isTyping={typing} type={currentPhrase.style}>
              &#9608;
            </Cursor>
          </text>
          <circle cx="31.8" cy="269.2" r="1.3" />
          <circle cx="33.7" cy="271.5" r=".4" />
          <circle cx="37" cy="274.2" r="1.1" />
          <HeadphoneBar width="1.1" height="4.2" x="141.8" y="233.2" ry=".4" transform="rotate(23.3)" />
        </g>
      </svg>
    </Container>
  );
};

export { MainAppImage };
