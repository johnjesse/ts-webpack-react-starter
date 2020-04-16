import * as React from 'react';
import styled from '@emotion/styled';
import { Link } from '@reach/router';

import { AppLink } from './Hyperlink';
import { LinkMenu } from './LinkMenu';

const Container = styled.header({
  padding: '1rem 0',
  display: 'flex',
  justifyContent: 'space-between',
});

const Title = styled.span({
  fontSize: '30px',
});

const StyledLink = styled(AppLink)({
  padding: 4,
  borderRadius: 4,
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
  { name: 'About', to: '/about/', key: 'blog-link' },
  { name: 'Contact', to: '/contact/', key: 'blog-link' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const menuLinks = React.useMemo(() => links.map((l) => ({ ...l, action: () => setMenuOpen(false) })), [setMenuOpen]);

  return (
    <Container>
      <Title>
        <Link to="/">John talks to himself</Link>
      </Title>
      <div>
        <LinksContainer>
          {links.map(({ key, to, name }) => (
            <StyledLink to={to} key={key}>
              {name}
            </StyledLink>
          ))}
        </LinksContainer>
        <MenuContainer>
          <LinkMenu links={menuLinks} open={menuOpen} onOpenChange={setMenuOpen} />
        </MenuContainer>
      </div>
    </Container>
  );
};

export { Header };
