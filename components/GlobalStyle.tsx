import { createGlobalStyle } from 'styled-components';
import { fonts } from '../styles/fonts';
import { typography } from '../styles/typography';

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
