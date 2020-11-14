import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0rem;
    padding: 0rem;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
  }

  html {
    font-size: 62.5%;
    color: ${colors.primary};
  }

  body {
    font-size: 1.6rem;
  }

  a {
    cursor: pointer;
  }
`;
