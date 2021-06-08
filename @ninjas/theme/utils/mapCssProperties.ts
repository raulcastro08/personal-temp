import { keysOfCssProps } from "./cssProperties";
import { PropToStyle, propToStyle } from "./propToStyle";

export const mapCssProperties = () => {
  const mappedCss: PropToStyle[] = [];

  keysOfCssProps.forEach((property) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mappedCss.push(propToStyle(property as any));
  });

  return mappedCss;
};
