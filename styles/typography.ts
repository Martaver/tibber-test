import { css } from "styled-components";
import { mq } from './mq';

export const typography = css`

    h1 {
        font-family: 'Lato';
        font-weight: 600;
        font-size: 0.6em;
    }

    ${mq.gt.md`
        h1 {
            font-size: 0.8em;
        }
    `}

`;