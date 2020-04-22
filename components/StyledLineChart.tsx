import styled from "styled-components";
import { LineChart } from "recharts";
import { tick } from "../styles/palette";

/**
 * A LineChart component that implements Tibber-esque styling.
 */
export const StyledLineChart = styled(LineChart)`

    margin-top: 3em;
    margin-left: -2em;

    text {
        font-family: 'Lato';
        font-size: 0.65em;
        tspan {
            stroke: ${tick};
            stroke-width: 0.02em;
        }
    }    
`;
