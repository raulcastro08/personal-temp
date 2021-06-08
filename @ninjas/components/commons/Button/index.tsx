/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled, { css } from "styled-components";
import { Property } from "csstype";
import { Variant, ColorVariant } from "@theme";
import { getColor } from "@ninjas/theme/utils/color";
import { mapCssProperties } from "@ninjas/theme/utils/mapCssProperties";
import {
  BreakpointMedia,
  breakpointsMedia,
} from "@ninjas/theme/utils/breakpointsMedia";

import Link, { LinkProps } from "../Link";
import { TextStyleVariantsMap } from "../../foundation/Text";

interface ButtonDefaultProps {
  variant?: `${Variant}.${ColorVariant}`;
}

interface ButtonWrapperProps {
  ghost?: boolean;
  fullWidth?: boolean;
}

/* color: ${(props) => get(props.theme, `colors.${props.variant}.color`)}; */
const ButtonGhost = css<ButtonDefaultProps>`
  color: ${({ theme, variant }) => getColor(theme.colors, variant)?.color};
  background: transparent;
`;

const ButtonDefault = css<ButtonDefaultProps>`
  color: white;
  background-color: ${({ theme, variant }) =>
    getColor(theme.colors, variant)?.color};
  color: ${({ theme, variant }) =>
    getColor(theme.colors, variant)?.contrastText};
`;

const ButtonWrapper = styled.button<ButtonWrapperProps & ButtonDefaultProps>`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-family: Montserrat;
  font-weight: bold;
  opacity: 1;

  ${TextStyleVariantsMap.smallestException}
  ${({ ghost }) => {
    if (ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }}
  transition: opacity ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    opacity: 0.5;
  }
  ${breakpointsMedia({
    xs: css`
      /* All devices */
      ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
      /* From md breakpoint */
      ${TextStyleVariantsMap.paragraph1}
    `,
  })}
  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `};

  ${mapCssProperties()}
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonWrapperProps;

type GenericButtonProps = ButtonDefaultProps &
  ButtonWrapperProps & {
    margin?: Property.Margin | BreakpointMedia<Property.Margin>;
    display?: Property.Display | BreakpointMedia<Property.Display>;
  };

const Button: React.FC<
  ((ButtonProps & { tag: "button" }) | (LinkProps & { tag: "link" })) &
    GenericButtonProps
> = ({ children, variant, ...props }) => {
  if (props.tag === "link") {
    <ButtonWrapper href={props.href} {...props} as={Link}>
      {children}
    </ButtonWrapper>;
  }

  if (props.tag === "button") {
    return (
      <ButtonWrapper variant={variant} {...props} as="button">
        {children}
      </ButtonWrapper>
    );
  }

  return null;
};

export { Button };
