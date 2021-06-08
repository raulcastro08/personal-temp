import React from "react";
import { breakpointsMedia } from "@ninjas/theme/utils/breakpointsMedia";
import styled, { css } from "styled-components";
import { TextStyleVariantsMap } from "../../../foundation/Text";

export type DefaultFooterWrapperProps = React.HTMLAttributes<HTMLElement>;

export const FooterWrapper = styled.footer<DefaultFooterWrapperProps>`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding-right: 50px;
  padding-left: 50px;
`;
export const LeftSide = styled.div`
  display: inline;
  padding: 0;
  margin: 0;
  order: 1;
  ${breakpointsMedia({
    md: css`
      width: 131px;
      height: 32px;
    `,
  })}
  ${breakpointsMedia({
    md: css`
      order: initial;
      padding-right: 16px;
    `,
  })}
  a {
    color: ${({ theme }) => theme.colors.primary.main.color};
    text-decoration: none;
    transition: 0.3s;
    margin: 4px;
    display: inline;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
`;
export const RightSide = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: right;
  flex: 1;
  order: 2;
  ${breakpointsMedia({
    md: css`
      order: initial;
    `,
  })}
`;

export const CentralSide = styled.div`
  padding: 0;
  margin: 0;
  order: 3;
  width: 100%;
  list-style: none;
  display: inline;
  align-items: center;
  justify-content: left;
  padding-left: 30px;
  margin-top: 17px;
  a {
    color: ${({ theme }) => theme.colors.primary.main.color};
    text-decoration: none;
    transition: 0.3s;
    margin: 5px;
    display: inline;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
    svg {
      width: 20px;
      height: 20px;
    }
  }
  ${breakpointsMedia({
    md: css`
      max-width: 332px;
      justify-content: space-between;

      flex: 1;
      order: initial;
      border: none;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
    `,
  })}
`;
