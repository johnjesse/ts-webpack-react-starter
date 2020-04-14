import * as React from 'react';
import styled from '@emotion/styled';
import { Link } from '@reach/router';
import { AppLink } from './Hyperlink';

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

const Header = () => (
  <Container>
    <Title>
      <Link to="/">Cool Snowman</Link>
    </Title>
    <div>
      <StyledLink to="/blog/">Blog</StyledLink>
      <StyledLink to="/about/">About</StyledLink>
      <StyledLink to="/contact/">Contact</StyledLink>
    </div>
  </Container>
);

export { Header };
