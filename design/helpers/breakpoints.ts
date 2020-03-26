/** @module utils/breakpoints */
import { css } from "styled-components";

/**
 * Create custom media queries
 * e.g.
 * ```
 * ${mediaQuery`(min-width: 500px)``
 *   color: red;
 * `};
 * ```
 * Becomes
 * ```
 * &#064;media (min-width: 500px) {
 *   color: red;
 * }
 * ```
 * @function
 * @param {StringTemplate} ...query
 * @param {StringTemplate} ...rules
 * @returns {CSS}
 */
export const mediaQuery = (
  stringsQuery: TemplateStringsArray,
  ...query: any[]
) => (stringsRules: TemplateStringsArray, ...rules: any[]) =>
  css`
    @media ${css(stringsQuery, ...query)} {
      ${css(stringsRules, ...rules)};
    }
  `;

export const breakpoints = {
  sm: 575,
  md: 768,
  lg: 992,
  max: 1023
};

/**
 * Smallest measurement for media query. Generally fits mobile screens.
 * @function
 * @see {@link greaterThanMd}
 * @param {StringTemplate}
 * @returns {CSS}
 */
export const xs = mediaQuery`(max-width: ${breakpoints.sm - 1}px)`;

/**
 * Generally fits mobile in landscape rotation
 * @function
 * @see {@link greaterThanMd}
 * @param {StringTemplate}
 * @returns {CSS}
 */
export const sm = mediaQuery`(min-width: ${
  breakpoints.sm
}px) and (max-width: ${breakpoints.md - 1}px)`;

/**
 * Generally fits tablet in landscape rotation
 * @function
 * @see {@link greaterThanMd}
 * @param {StringTemplate}
 * @returns {CSS}
 */
export const md = mediaQuery`(min-width: ${
  breakpoints.md
}px) and (max-width: ${breakpoints.lg - 1}px)`;

/**
 * Generally caters for desktop screens and larger
 * @function
 * @see {@link greaterThanMd}
 * @param {StringTemplate}
 * @returns {CSS}
 */
export const lg = mediaQuery`(min-width: ${breakpoints.lg}px)`;

/**
 * Generally caters for larger than mobile screens in landscape rotation
 * @function
 * @see {@link greaterThanMd}
 * @param {StringTemplate}
 * @returns {CSS}
 */
export const greaterThanSm = mediaQuery`(min-width: ${breakpoints.sm}px)`;

/**
 * Generally caters for larger than tablet screens
 * e.g.
 * ```
 * ${greaterThanMd`
 *   color: red;
 * `};
 * ```
 * Becomes
 * ```
 * &#064;media (min-width: 768px) {
 *   color: red;
 * }
 * ```
 * @function
 * @param {StringTemplate}
 * @returns {CSS}
 */
export const greaterThanMd = mediaQuery`(min-width: ${breakpoints.md}px)`;

/**
 * Generally caters for larger tablets and small desktop windows
 * @function
 * @see {@link greaterThanMd}
 * @param {StringTemplate}
 * @returns {CSS}
 */
export const greaterThanLg = mediaQuery`(min-width: ${breakpoints.lg}px)`;

/**
 * Generally caters for larger desktop window sizes
 * @function
 * @see {@link greaterThanMd}
 * @param {StringTemplate}
 * @returns {CSS}
 */
export const greaterThanMax = mediaQuery`(min-width: ${breakpoints.max}px)`;

/**
 * The maximum width allowed
 * @function
 * @see {@link greaterThanMd}
 * @param {StringTemplate}
 * @returns {CSS}
 */
export const max = mediaQuery`(max-width: ${breakpoints.max}px)`;
