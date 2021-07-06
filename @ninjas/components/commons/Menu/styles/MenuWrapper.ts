import styled, { css } from "styled-components";
import { breakpointsMedia } from "@ninjas/theme/utils/breakpointsMedia";
import { TextStyleVariantsMap } from "../../../foundation/Text";

export type MenuWrapperDefaultProps = React.HTMLAttributes<HTMLElement>;

export const Menu = styled.nav<MenuWrapperDefaultProps>`
  font-family: "Open Sans", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 28px;
  padding-right: 28px;
  ${breakpointsMedia({
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
    md: css`
      justify-content: flex-start;
      align-items: center;
      margin-top: 0;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
      max-width: 768px;
    `,
  })}
`;

const LeftSide = styled.div`
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
`;

const CentralSide = styled.div`
  padding: 0;
  margin: 0;
  order: 3;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 17px;
  border-top: 1px solid #88989e;
  border-bottom: 1px solid #88989e;
  padding: 12px;

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
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989e;
    transition: 200ms ease-in-out;
    ${breakpointsMedia({
      xs: css`
        ${TextStyleVariantsMap.smallestException}
      `,
      md: css`
        ${TextStyleVariantsMap.paragraph1}
      `,
    })}
    &:hover,
    &:focus {
      font-weight: 500;
      color: #070c0e;
    }
  }
`;

const RightSide = styled.div`
  padding: 0;
  margin: 0;
  width: 126px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 17px;
  flex: 1;
  order: 2;
  justify-content: flex-end;
  list-style: none;
  ${breakpointsMedia({
    md: css`
      order: initial;
    `,
    lg: css`
      order: initial;
    `,
  })}
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989e;
    transition: 200ms ease-in-out;
    margin: 12px;
    ${breakpointsMedia({
      xs: css`
        ${TextStyleVariantsMap.smallestException}
      `,
      md: css`
        ${TextStyleVariantsMap.paragraph1}
      `,
    })}
    &:hover,
    &:focus {
      font-weight: 500;
      color: #070c0e;
    }
  }
`;

export const MenuWrapper = { Menu, LeftSide, CentralSide, RightSide };
