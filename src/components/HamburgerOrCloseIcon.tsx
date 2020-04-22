import styled from '@emotion/styled';
import * as React from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';

import { IThemedProps } from '../theme';

interface IHamburgerIconProps extends ICommonProps {
  className?: string;
}

interface ICommonProps {
  hamburgerOrClose: 'hamburger' | 'close';
}

const StyledLine = styled.line<IThemedProps & { isHidden?: boolean }>(({ theme, isHidden }) => ({
  stroke: theme.interactive01,
  opacity: isHidden ? 0 : 1,
}));

const Line1 = ({ hamburgerOrClose }: ICommonProps) => {
  const isHamburger = hamburgerOrClose === 'hamburger';

  return (
    <Flipped flipId="line1">
      {isHamburger ? <StyledLine x1="3" y1="4" x2="13" y2="4" /> : <StyledLine x1="4" y1="4" x2="12" y2="12" />}
    </Flipped>
  );
};

const Line2 = ({ hamburgerOrClose }: ICommonProps) => {
  const isHamburger = hamburgerOrClose === 'hamburger';

  return (
    <Flipped flipId="line2">
      {isHamburger ? <StyledLine x1="3" y1="8" x2="13" y2="8" /> : <StyledLine isHidden x1="8" y1="8" x2="8" y2="8" />}
    </Flipped>
  );
};

const Line3 = ({ hamburgerOrClose }: ICommonProps) => {
  const isHamburger = hamburgerOrClose === 'hamburger';

  return (
    <Flipped flipId="line3">
      {isHamburger ? <StyledLine x1="3" y1="12" x2="13" y2="12" /> : <StyledLine x1="4" y1="12" x2="12" y2="4" />}
    </Flipped>
  );
};

const HamburgerOrCloseIcon = ({ className, hamburgerOrClose }: IHamburgerIconProps) => {
  return (
    <Flipper flipKey={hamburgerOrClose} spring={{ stiffness: 500, damping: 50 }}>
      <svg className={className} viewBox="0 0 16 16">
        <Line1 hamburgerOrClose={hamburgerOrClose} />
        <Line2 hamburgerOrClose={hamburgerOrClose} />
        <Line3 hamburgerOrClose={hamburgerOrClose} />
      </svg>
    </Flipper>
  );
};

export { HamburgerOrCloseIcon };
