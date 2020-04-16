import * as React from 'react';
import styled from '@emotion/styled';
import { Router } from '@reach/router';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GlobalStyling, Theme, IThemedProps } from './theme';
import { Home, Blog, Contact, About } from './pages';

const Container = styled.div<IThemedProps>({
  minWidth: '15rem',
  maxWidth: '45rem',
  margin: 'auto',
  padding: '0 2rem',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100%',
});

const MainRouter = styled(Router)({
  padding: '1.5rem 0',
  flex: '1 0 auto',
});

export const App = () => (
  <Theme>
    <GlobalStyling />
    <Container>
      <Header />
      <MainRouter>
        <Home path="/" />
        <Blog path="/blog/" />
        <Contact path="/contact/" />
        <About path="/about/" />
      </MainRouter>
      <Footer />
    </Container>
  </Theme>
);
