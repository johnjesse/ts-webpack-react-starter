import * as React from 'react';
import styled from '@emotion/styled';

import { AppLink } from './Hyperlink';
import { LinkMenu } from './LinkMenu';
import { MainAppImage } from './headericon/MainAppImage';
import { IThemedProps } from '../theme';

const Container = styled.header<IThemedProps>(({ theme }) => ({
  borderBottom: theme.strongBorder,
  padding: '1rem 0',
  display: 'flex',
  justifyContent: 'space-between',
}));

const StyledLink = styled(AppLink)({
  padding: 4,
  borderRadius: 4,
});

const TitleLink = styled(StyledLink)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

const MenuScreenBreakSize = 600;

const LinksContainer = styled.div({
  [`@media (max-width: ${MenuScreenBreakSize}px)`]: {
    display: 'none',
  },
});

const MenuContainer = styled.div({
  display: 'none',
  [`@media (max-width: ${MenuScreenBreakSize}px)`]: {
    display: 'block',
  },
});

const links = [
  { name: 'Blog', to: '/blog/', key: 'blog-link' },
  { name: 'About', to: '/about/', key: 'about-link' },
  { name: 'Contact', to: '/contact/', key: 'contact-link' },
];

interface IHeaderProps {
  openMenu: boolean;
  onOpenMenuChange(open: boolean): void;
}

const Header = ({ openMenu, onOpenMenuChange }: IHeaderProps) => {
  const menuLinks = React.useMemo(() => links.map((l) => ({ ...l, action: () => onOpenMenuChange(false) })), [
    onOpenMenuChange,
  ]);

  return (
    <Container>
      <TitleLink to="/">
        <div>John talks to himself</div>
        <MainAppImage />
      </TitleLink>

      <div>
        <LinksContainer>
          {links.map(({ key, to, name }) => (
            <StyledLink to={to} key={key}>
              {name}
            </StyledLink>
          ))}
        </LinksContainer>
        <MenuContainer>
          <LinkMenu links={menuLinks} open={openMenu} onOpenChange={onOpenMenuChange} />
        </MenuContainer>
      </div>
    </Container>
  );
};

export { Header };
