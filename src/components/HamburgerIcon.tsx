import * as React from 'react';
import { useTheme } from '../theme';

interface IHamburgerIconProps {
  className?: string;
}

const HamburgerIcon = (props: IHamburgerIconProps) => {
  const fill = useTheme().interactive01;

  return (
    <svg className={props.className} viewBox="0 0 16 16">
      <line stroke={fill} x1="3" y1="4" x2="13" y2="4" />
      <line stroke={fill} x1="3" y1="8" x2="13" y2="8" />
      <line stroke={fill} x1="3" y1="12" x2="13" y2="12" />
    </svg>
  );
};

export { HamburgerIcon };
