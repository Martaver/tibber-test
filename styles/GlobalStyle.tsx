import { createGlobalStyle } from 'styled-components';
import { fonts } from './fonts';
import { typography } from './typography';

export const GlobalStyle = createGlobalStyle`  
  ${fonts}
  ${typography}
  html,
  body {
    padding: 0;
    margin: 0;
    background: white;
    min-height: 100%;    
  }
  * {
    box-sizing: border-box;
  }
`;
