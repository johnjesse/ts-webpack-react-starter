import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import * as React from 'react';

import { ITheme } from './Themes';

const GlobalStyling = () => {
  const theme = useTheme<ITheme>();
  console.log('global theme running', theme);

  return (
    <Global
      styles={css`
        html {
          font-family: 'Roboto', sans-serif;
          color: ${theme.text01};
          background: ${theme.background01};
          margin: 0;
          font-size: 16px;
          line-height: 1.5;
        }
        body {
          margin: 0;
          -webkit-font-smoothing: 'antialiased',
          -moz-os-fon-smoothing: 'grayscale',
          -webkit-text-size-adjust: '100%',
          -ms-text-size-adjust: '100%',
        }

        * {
          box-sizing: border-box;
          transition: background-color 0.2s;
        }
      `}
    />
  );
};

export { GlobalStyling };
