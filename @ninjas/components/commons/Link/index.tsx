/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import NextLink from "next/link";
import styled from "styled-components";
import { ColorVariant, Variant } from "@theme";
import { getColor } from "@ninjas/theme/utils/color";

interface StyledLinkDefaultProps {
  readonly color?: `${Variant}.${ColorVariant}`;
}

const StyledLink = styled.a<StyledLinkDefaultProps>`
  ${({ theme, color }) =>
    color
      ? `color: ${getColor(theme.colors, color)?.color}`
      : "color: inherit;"};
  text-decoration: none;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export type LinkProps = React.HTMLAttributes<HTMLAnchorElement> &
  StyledLinkDefaultProps & {
    href?: string;
  };

const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <StyledLink {...props}>{children}</StyledLink>
    </NextLink>
  );
};

export default Link;
