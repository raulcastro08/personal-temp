import styled, { css } from "styled-components";
import { breakpointsMedia } from "@ninjas/theme/utils/breakpointsMedia";
import { TextStyleVariantsMap } from "../../../foundation/Text";

export type MenuWrapperDefaultProps = React.HTMLAttributes<HTMLElement>;

export const Menu = styled.nav<MenuWrapperDefaultProps>`
  font-family: "Montserrat", sans-serif;
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 28px;
  padding-right: 28px;
  position: fixed;
  top: 0;
  left:0;
  right: 0;
  background-color: #e9e9e9;
}
  ${breakpointsMedia({
    md: css`
      justify-content: flex-start;
      align-items: left;
      margin-top: 0;
      margin-left: 0;
      margin-right: 0;
      padding-left: 150px;
      width: 100%;
      height: 80px;
      padding: 0 16px;
      max-width: 768px;
    `,
    lg: css`
      max-width: 1519px;
      padding-left: 150px;
    `,
    xl: css`
      max-width: 1519px;
      padding-left: 150px;
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
      width: 50%;
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
  align-items: right;
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
  display: flex;
  flex: 1;
  order: 2;
  justify-content: flex-end;
  ${breakpointsMedia({
    md: css`
      order: initial;
    `,
  })}
`;

export const MenuWrapper = { Menu, LeftSide, CentralSide, RightSide };
