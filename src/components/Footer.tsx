import * as React from 'react';
import styled from '@emotion/styled';
import { Email32 } from '@carbon/icons-react';

import { ThemeTypeContext, useTheme, ITheme, IThemedProps } from '../theme';
import githubLight from '../static/GitHub-Mark-Light-32px.png';
import githubDark from '../static/GitHub-Mark-32px.png';

import { Toggle } from './Toggle';
import { Hyperlink } from './Hyperlink';

const Container = styled.footer<IThemedProps>(({ theme }) => ({
  padding: '1rem 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  borderTop: theme.strongBorder,
}));

const MarginBetweenFooterItems = '0.5rem';

const SmallText = styled.span({ fontSize: '12px', marginTop: MarginBetweenFooterItems });
const StyledHyperlink = styled(Hyperlink)({
  display: 'flex',
  alignItems: 'center',
  marginTop: MarginBetweenFooterItems,
});

const PaddedText = styled.span({ padding: '0 0.5rem' });

const Footer = () => {
  const themeContext = React.useContext(ThemeTypeContext);
  const theme = useTheme<ITheme>();

  if (!themeContext) {
    return null;
  }

  const {
    currentTheme: { type, name },
    setTheme,
    nextTheme: { type: nextType },
  } = themeContext;

  const handleChange = () => {
    setTheme(nextType);
  };

  return (
    <Container>
      <Toggle on={type === 'dark'} label={name} onChange={handleChange} />
      <StyledHyperlink href="https://github.com/johnjesse">
        <img src={type === 'dark' ? githubLight : githubDark} />
        <PaddedText>GitHub</PaddedText>
      </StyledHyperlink>
      <StyledHyperlink href="mailto:TODO a proper email address">
        <Email32 fill={theme.text01} /> <PaddedText>Email Me</PaddedText>
      </StyledHyperlink>
      <SmallText>(c) John J Wood</SmallText>
    </Container>
  );
};

export { Footer };
