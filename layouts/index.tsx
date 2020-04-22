import React from 'react';

import Meta from "../components/Meta";
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from '../components/GlobalStyle';
import styled from 'styled-components';
import { back } from '../styles/palette';
import chroma from 'chroma-js';

const MainGrid = styled.main`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 2em;

  height: 100vh;
  overflow: hidden;

  background: ${back};
  background: linear-gradient(170deg, ${chroma(back).darken(2).hex()} 0%, ${chroma(back).desaturate(0.5).hex()} 100%);
`;

/**
 * Default layout component
 */
const DefaultLayout: React.FC = ({ children }) => {

  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Meta />
      <MainGrid>
        {children}
      </MainGrid>
    </>
  )
};

export default DefaultLayout;
