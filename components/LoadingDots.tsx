import styled from 'styled-components';

import {motion} from 'framer-motion';

import {axis} from '../styles/palette';

export const LoadingDots = styled(motion.ul)`
  &,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  display: flex;

  li {
    width: 1em;
    height: 1em;
    border-radius: 1em;
    margin-bottom: 1em;
    margin-right: 1em;
    background-color: ${axis};
  }
`;
