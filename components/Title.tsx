import styled from 'styled-components';
import { title } from '../styles/palette';

/**
 * A title that positions itself relative to the top of the viewbox.
 */
export const Title = styled.h1`

    position: fixed;
    top: 10%;    
    
    color: ${title};
`;
