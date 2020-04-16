import * as React from 'react';
import styled from '@emotion/styled';

import { HamburgerIcon } from './HamburgerIcon';
import { IThemedProps } from '../theme';
import { AppLink } from './Hyperlink';

const StyledIcon = styled(HamburgerIcon)({
  width: '3rem',
  height: '3rem',
});

const Button = styled.button<IThemedProps>(({ theme }) => ({
  zIndex: 5,
  position: 'relative',
  width: '3rem',
  height: '3rem',
  border: 'none',
  padding: '0',
  margin: '0',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  '&:hover,&:focus': {
    backgroundColor: theme.linkHover,
  },
}));

const Container = styled.div<IThemedProps>(({ theme }) => ({
  position: 'absolute',
  background: theme.background02,
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  zIndex: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

const StyledAppLink = styled(AppLink)<IThemedProps>({
  fontSize: '2rem',
  padding: '1rem',
  marginBottom: '2rem',
});

interface ILinkMenuProps {
  open: boolean;
  onOpenChange: (nextOpen: boolean) => void;
  links: { name: string; to: string; key: string; action?: () => void }[];
}

const LinkMenu = ({ links, onOpenChange, open }: ILinkMenuProps) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const handleLastItemBlur = () => buttonRef.current?.focus();

  return (
    <>
      <Button ref={buttonRef} aria-label="Navigation links" onClick={() => onOpenChange(!open)}>
        <StyledIcon />
      </Button>
      {open && (
        <Container>
          {links.map(({ to, name, key, action }, index) => (
            <StyledAppLink
              to={to}
              key={key}
              onClick={action}
              onBlur={index === links.length - 1 ? handleLastItemBlur : undefined}
            >
              {name}
            </StyledAppLink>
          ))}
        </Container>
      )}
    </>
  );
};

export { LinkMenu };
