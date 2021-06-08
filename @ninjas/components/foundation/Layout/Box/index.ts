import styled from "styled-components";

import { mapCssProperties } from "@ninjas/theme/utils/mapCssProperties";
import { GenericCSSProperties } from "@ninjas/theme/utils/cssProperties";

export type BoxProps = React.HTMLAttributes<HTMLDivElement> &
  GenericCSSProperties & {
    borderRadiusTheme?: boolean;
  };

export const Box = styled.div<BoxProps>`
  ${mapCssProperties()}

  ${({ theme, borderRadiusTheme }) =>
    borderRadiusTheme && `border-radius: ${theme.borderRadius}`};
`;
