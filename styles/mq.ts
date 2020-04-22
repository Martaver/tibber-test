import { css } from "styled-components";

/**
 * The breakpoint limits used across the site.
 */
const bp = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
}

export type Breakpoint = keyof typeof bp;

const em = (bp: number) => `${bp / 16}em`;
const minw = (bp: number) => `(min-width: ${em(bp)})`;
const maxw = (bp: number) => `(max-width: ${em(bp)})`;

export const gt = {
    xs: minw(bp.sm + 1),
    sm: minw(bp.md + 1),
    md: minw(bp.lg + 1),
    lg: minw(bp.xl + 1),
};

type GtQueries = {
    [P in keyof typeof gt]: typeof css;
}

export const lt = {
    sm: maxw(bp.sm),
    md: maxw(bp.md),
    lg: maxw(bp.lg),
    xl: maxw(bp.xl),
};

type LtQueries = {
    [P in keyof typeof lt]: typeof css;
}

export const is = {
    xs: lt.sm,
    sm: `${gt.xs} and ${lt.md}`,
    md: `${gt.sm} and ${lt.lg}`,
    lg: `${gt.md} and ${lt.xl}`,
    xl: gt.lg,
};

type IsQueries = {
    [P in keyof typeof is]: typeof css;
}

const build = (queries: { [key: string]: string }) => Object.keys(queries).reduce((acc, label) => {
    acc[label] = (strings: TemplateStringsArray, ...interpolations: any[]) => css`
    @media ${(queries)[label]} {
      ${css(strings, ...interpolations)}
    }
  `;
    return acc;
}, {} as any);

type MediaQueries = IsQueries & { gt: GtQueries, lt: LtQueries }

/**
 * Builds an API based on our break-points that can be used in-line in styled-components or emotion.
 * 
 * This is mainly copy-pasta code that I use from one project to the next, to make life easy. I should probably
 * stick it in a package.
 * 
 * For an example of how I use it check out ./typography.ts.
 */
export const mq: MediaQueries = {
    ...build(is),
    gt: build(gt),
    lt: build(lt)
}