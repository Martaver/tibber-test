import {css} from 'styled-components';

import {mq} from './mq';

/**
 * I keep all typography here, configuring responsiveness and style together.
 *
 * Components consume css from this file and palette together to render fonts for their
 * individual requirements.
 *
 * In more typography-heavy sites, I will also configure vertical rhythmn and harmonic scaling here.
 */
export const typography = css`
  h1 {
    font-family: 'Lato';
    font-weight: 600;
    font-size: 0.6em;
  }

  /* This is an example of how I use mq to create a media query, enlargening h1 in desktop views. */
  /* mq = media query, gt = greater than, md = medium (breakpoint) */
  ${mq.gt.md`
        h1 {
            font-size: 0.8em;
        }
    `}
`;
