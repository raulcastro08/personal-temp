/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
import { Properties, StandardProperties } from "csstype";
import { FlattenSimpleInterpolation } from "styled-components";
import { breakpointsMedia } from "./breakpointsMedia";

export type CSSProperties = keyof StandardProperties;

export type PropToStyle = (
  props: unknown
) => FlattenSimpleInterpolation[] | { [x: string]: string | number } | null;

export const propToStyle = (propName: keyof Properties): PropToStyle => {
  return (props: unknown) => {
    const propValue = props[propName]; // string ou objeto

    if (typeof propValue === "string" || typeof propValue === "number") {
      return { [propName]: propValue };
    }

    if (typeof propValue === "object") {
      return breakpointsMedia({
        xs: {
          [propName]: propValue.xs,
        },
        sm: {
          [propName]: propValue.sm,
        },
        md: {
          [propName]: propValue.md,
        },
        lg: {
          [propName]: propValue.lg,
        },
        xl: {
          [propName]: propValue.xl,
        },
      });
    }

    return null;
  };
};
