import chroma from 'chroma-js';

/**
 * The base background color from which all other background colors are derived.
 * Obtained from tibber.com.
 */
export const back = '#23B8CC';

/**
 * The base foreground color from which all other foreground colors are derived.
 */
export const fore = '#ffffff';

//
// Temperature chart
//

/**
 * Color of the temperature chart's line
 */
export const line = chroma(fore).alpha(0.65).css();

/**
 * Color of the temperature chart's axis
 */
export const axis = chroma(fore).alpha(0.35).css();

/**
 * Color of the temperature chart's axis ticks
 */
export const tick = chroma(fore).css();

//
// Title
//

/**
 * Color of the page title
 */
export const title = chroma(fore).alpha(0.75).css();
