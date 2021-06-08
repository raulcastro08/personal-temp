import styled, { css } from "styled-components";
import { breakpointsMedia } from "@ninjas/theme/utils/breakpointsMedia";
import { Breakpoints } from "@ninjas/theme/breakpoints";
import { mapCssProperties } from "@ninjas/theme/utils/mapCssProperties";
import { GenericCSSProperties } from "@ninjas/theme/utils/cssProperties";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

type ContainerDefaultProps = DivProps & Omit<GenericCSSProperties, "offset">;
type RowlDefaultProps = DivProps & Omit<GenericCSSProperties, "offset">;
type ColDefaultProps = DivProps &
  Omit<GenericCSSProperties, "offset"> & {
    value?:
      | number
      | {
          [key in Breakpoints]?: number;
        };
    offset?:
      | number
      | {
          [key in Breakpoints]?: number;
        };
  };

const Container = styled.div<ContainerDefaultProps>`
  width: 100%;
  padding-right: 28px;
  padding-left: 28px;
  margin-right: auto;
  margin-left: auto;

  ${breakpointsMedia({
    sm: css`
      max-width: 576px;
    `,
    md: css`
      max-width: 768px;
      padding-right: 16px;
      padding-left: 16px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}

  ${mapCssProperties()}
`;

//  ${propToStyle("marginTop")}
//   ${propToStyle("display")}
//   ${propToStyle("flex")}
//   ${propToStyle("alignItems")}

const Row = styled.div<RowlDefaultProps>`
  display: flex;
  flex-wrap: wrap;
  margin-right: -16px;
  margin-left: -16px;

  ${mapCssProperties()}
`;

// ${propToStyle("flex")}
// ${propToStyle("marginLeft")}
// ${propToStyle("marginRight")}
// ${propToStyle("marginBottom")}
// ${propToStyle("marginTop")}
// ${propToStyle("flexDirection")}
// ${propToStyle("justifyContent")}

const Col = styled.div<ColDefaultProps>`
  padding-right: 16px;
  padding-left: 16px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  ${({ value }) => {
    if (!value) {
      return null;
    }

    if (typeof value === "number") {
      return css`
        flex: 0 0 ${(100 * value) / 12}%;
        max-width: ${(100 * value) / 12}%;
      `;
    }

    return breakpointsMedia({
      ...(value.xs && {
        xs: css`
          flex: 0 0 ${(100 * value.xs) / 12}%;
          max-width: ${(100 * value.xs) / 12}%;
        `,
      }),
      ...(value.sm && {
        sm: css`
          flex: 0 0 ${(100 * value.sm) / 12}%;
          max-width: ${(100 * value.sm) / 12}%;
        `,
      }),
      ...(value.md && {
        md: css`
          flex: 0 0 ${(100 * value.md) / 12}%;
          max-width: ${(100 * value.md) / 12}%;
        `,
      }),
      ...(value.lg && {
        lg: css`
          flex: 0 0 ${(100 * value.lg) / 12}%;
          max-width: ${(100 * value.lg) / 12}%;
        `,
      }),
      ...(value.xl && {
        xl: css`
          flex: 0 0 ${(100 * value.xl) / 12}%;
          max-width: ${(100 * value.xl) / 12}%;
        `,
      }),
    });
  }}
  ${({ offset }) => {
    if (!offset) {
      return null;
    }

    if (typeof offset === "number") {
      return css`
        margin-left: ${(100 * offset) / 12}%;
      `;
    }
    return breakpointsMedia({
      ...(offset.xs && {
        xs: css`
          margin-left: ${(100 * offset.xs) / 12}%;
        `,
      }),
      ...(offset.sm && {
        sm: css`
          margin-left: ${(100 * offset.sm) / 12}%;
        `,
      }),
      ...(offset.md && {
        md: css`
          margin-left: ${(100 * offset.md) / 12}%;
        `,
      }),
      ...(offset.lg && {
        lg: css`
          margin-left: ${(100 * offset.lg) / 12}%;
        `,
      }),
      ...(offset.xl && {
        xl: css`
          margin-left: ${(100 * offset.xl) / 12}%;
        `,
      }),
    });
  }}

  ${mapCssProperties()}
`;

// ${propToStyle("display")}
// ${propToStyle("order")}
// ${propToStyle("alignItems")}
// ${propToStyle("justifyContent")}
// ${propToStyle("flexDirection")}
// ${propToStyle("paddingRight")}

export const Grid = {
  Container,
  Row,
  Col,
};
