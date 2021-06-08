export type Breakpoints = "xs" | "sm" | "md" | "lg" | "xl";

export type Breakpoint = {
  // eslint-disable-next-line no-unused-vars
  [key in Breakpoints]: number;
};

export const breakpoints: Breakpoint = {
  xs: 0, // extra small
  sm: 480, // small
  md: 768, // medium
  lg: 992, // large
  xl: 1200, // extra large
};
