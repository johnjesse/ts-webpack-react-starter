import styled from '@emotion/styled';
import { IThemedProps } from '../theme';
import { Link } from '@reach/router';

function createLinkStyles({ theme }: IThemedProps) {
  return {
    color: theme.interactive01,
    textDecoration: 'none',
    '&:hover,&:focus': {
      textDecoration: 'underline',
      backgroundColor: theme.linkHover,
      borderRadius: theme.borderRadius,
    },
  };
}

const Hyperlink = styled.a<IThemedProps>(createLinkStyles);
const AppLink = styled(Link)(createLinkStyles);

export { Hyperlink, AppLink };
