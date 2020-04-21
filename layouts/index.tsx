import React from 'react';

import Meta from "../components/Meta";
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from '../components/GlobalStyle';
import styled from 'styled-components';
import { mq } from '../styles/media';

const MainGrid = styled.main`
  
  display: grid;

  grid-template-areas:
    "H"
    "B"
    "F"

  grid-template-columns: 1fr;  
  grid-template-rows: 60px 1fr 120px;
  
  ${mq.lt.md`
    
  `}

  max-width: 960px;
  min-height: 100%;
  margin: 0px auto;
  padding: 0;
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
