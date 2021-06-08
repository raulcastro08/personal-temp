import React from "react";
import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";
import { ColorVariant, Variant } from "@theme";
import { TypographyType } from "@ninjas/theme/typographyVariants";
import { getColor } from "@ninjas/theme/utils/color";
import { mapCssProperties } from "@ninjas/theme/utils/mapCssProperties";
import { GenericCSSProperties } from "@ninjas/theme/utils/cssProperties";
import { breakpointsMedia } from "@ninjas/theme/utils/breakpointsMedia";

import Link from "../../commons/Link";

type TextStyleVariantsMapType = {
  [key in TypographyType]?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
};

type TextBaseDefaultProps = React.HTMLAttributes<HTMLSpanElement> &
  Omit<GenericCSSProperties, "color"> & {
    variant?: TypographyType;
    color?: `${Variant}.${ColorVariant}`;
  };

export const TextStyleVariantsMap: TextStyleVariantsMapType = {
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.paragraph1.lineHeight};
  `,
  smallestException: css`
    font-size: ${({ theme }) =>
      theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.smallestException.lineHeight};
  `,
  title: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.titleXS.fontSize};
      font-weight: ${theme.typographyVariants.titleXS.fontWeight};
      line-height: ${theme.typographyVariants.titleXS.lineHeight};
    `}
    ${breakpointsMedia({
      md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.title.fontSize};
          font-weight: ${theme.typographyVariants.title.fontWeight};
          line-height: ${theme.typographyVariants.title.lineHeight};
        `}
      `,
    })}
  `,
  titleXL: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.title.fontSize};
      font-weight: ${theme.typographyVariants.title.fontWeight};
      line-height: ${theme.typographyVariants.title.lineHeight};
    `}
    ${breakpointsMedia({
      md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.titleXL.fontSize};
          font-weight: ${theme.typographyVariants.titleXL.fontWeight};
          line-height: ${theme.typographyVariants.titleXL.lineHeight};
        `}
      `,
    })}
  `,
};

const TextBase = styled.span<TextBaseDefaultProps>`
  ${({ variant }) => TextStyleVariantsMap[variant]}
  color: ${({ theme, color }) => getColor(theme.colors, color)?.color};

  ${mapCssProperties()}
`;

export type Tags = "div" | "a" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "div";

export type TextProps = React.HTMLAttributes<HTMLAnchorElement> &
  TextBaseDefaultProps & {
    tag?: Tags;
    href?: string;
    variant?: string;
  };

const Text: React.FC<TextProps> = ({
  tag,
  variant,
  children,
  href,
  ...props
}) => {
  if (href || tag === "a") {
    return (
      <TextBase as={Link} href={href} variant={variant} {...props}>
        {children}
      </TextBase>
    );
  }

  return (
    <TextBase as={tag} variant={variant} {...props}>
      {children}
    </TextBase>
  );
};

export default Text;

// Text.propTypes = {
//   tag: PropTypes.string,
//   href: PropTypes.string,
//   variant: PropTypes.string,
//   children: PropTypes.node,
// };

// Text.defaultProps = {
//   tag: "span",
//   variant: "paragraph1",
//   children: null,
//   href: "",
// };

// p
// h1, h2 ... h6
// span
