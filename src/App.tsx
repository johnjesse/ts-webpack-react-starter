import * as React from 'react';
import styled from '@emotion/styled';
import { Router } from '@reach/router';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GlobalStyling, Theme } from './theme';
import { Home, Blog, Contact, About, Test } from './pages';

const Container = styled.div<{ canOverflow: boolean }>(({ canOverflow }) => ({
  minWidth: '15rem',
  maxWidth: '45rem',
  margin: 'auto',
  padding: '0 2rem',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100%',
  ...(canOverflow ? {} : { overflow: 'hidden' }),
}));

const MainRouter = styled(Router)({
  padding: '1.5rem 0',
  flex: '1 0 auto',
});

export const App = () => {
  const [openMenu, setMenuOpen] = React.useState(false);

  return (
    <Theme>
      <GlobalStyling />
      <Container canOverflow={!openMenu}>
        <Header openMenu={openMenu} onOpenMenuChange={setMenuOpen} />
        <MainRouter>
          <Test path="/" />
          <Home path="/home" />
          <Blog path="/blog/" />
          <Contact path="/contact/" />
          <About path="/about/" />
        </MainRouter>
        <Footer />
      </Container>
    </Theme>
  );
};
