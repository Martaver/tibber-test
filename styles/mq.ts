// This is old code, and still uses explicity any.
// I didn't want to re-type this code just for this demo, so I'm supressing eslint.
/* eslint-disable @typescript-eslint/no-explicit-any */

import {css} from 'styled-components';

/**
 * Builds an API based on our break-points that can be used in-line in styled-components or emotion.
 *
 * This is some of my copy-pasta code that I use from one project to the next, to make life easy. I should probably
 * stick it in a package.
 *
 * For an example of how I use it check out ./typography.ts.
 */

/**
 * The breakpoint limits used across the site.
 */
const bp = {
  lg: 992,
  md: 768,
  sm: 576,
  xl: 1200,
  xs: 0,
};

export type Breakpoint = keyof typeof bp;

const em = (bp: number) => `${bp / 16}em`;
const minw = (bp: number) => `(min-width: ${em(bp)})`;
const maxw = (bp: number) => `(max-width: ${em(bp)})`;

export const gt = {
  lg: minw(bp.xl + 1),
  md: minw(bp.lg + 1),
  sm: minw(bp.md + 1),
  xs: minw(bp.sm + 1),
};

type GtQueries = {
  [P in keyof typeof gt]: typeof css;
};

export const lt = {
  lg: maxw(bp.lg),
  md: maxw(bp.md),
  sm: maxw(bp.sm),
  xl: maxw(bp.xl),
};

type LtQueries = {
  [P in keyof typeof lt]: typeof css;
};

export const is = {
  lg: `${gt.md} and ${lt.xl}`,
  md: `${gt.sm} and ${lt.lg}`,
  sm: `${gt.xs} and ${lt.md}`,
  xl: gt.lg,
  xs: lt.sm,
};

type IsQueries = {
  [P in keyof typeof is]: typeof css;
};

const build = (queries: {[key: string]: string}) =>
  Object.keys(queries).reduce((acc, label) => {
    acc[label] = (
      strings: TemplateStringsArray,
      ...interpolations: any[]
    ) => css`
      @media ${queries[label]} {
        ${css(strings, ...interpolations)}
      }
    `;
    return acc;
  }, {} as any);

type MediaQueries = IsQueries & {gt: GtQueries; lt: LtQueries};

export const mq: MediaQueries = {
  ...build(is),
  gt: build(gt),
  lt: build(lt),
};
