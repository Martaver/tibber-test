import React from 'react';

import Meta from "../components/Meta";
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from '../styles/GlobalStyle';
import styled from 'styled-components';
import { back } from '../styles/palette';
import chroma from 'chroma-js';

const bgFrom = chroma(back).darken(2).css();
const bgTo = chroma(back).desaturate(0.5).css();

const Container = styled.main`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 2em;

  height: 100vh;
  overflow: hidden;

  background: ${back};
  background: linear-gradient(170deg, ${bgFrom} 0%, ${bgTo} 100%);
`;

/**
 * Default layout component
 */
export const DefaultLayout: React.FC = ({ children }) => {

  return (
    <Container>
      <Normalize />
      <GlobalStyle />
      <Meta />
      {children}
    </Container>
  )
};
