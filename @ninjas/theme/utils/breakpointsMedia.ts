import { css } from "styled-components";
import { Breakpoints, breakpoints } from "../breakpoints";

export type BreakpointMedia<T extends unknown> = {
  [key in Breakpoints]?: T;
};

/**
 *
 * @param {*} cssByBreakpoint valor de medida pré definida nos breakpoints
 *
 */

export const breakpointsMedia = <T>(cssByBreakpoint: BreakpointMedia<T>) => {
  const breakpointNames = Object.keys(breakpoints);

  return breakpointNames
    .filter((breakpointName) => Boolean(cssByBreakpoint[breakpointName]))
    .map(
      (breakpointName) => css`
        @media only screen and (min-width: ${breakpoints[breakpointName]}px) {
          ${cssByBreakpoint[breakpointName]}
        }
      `
    );
};
