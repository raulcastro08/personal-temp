import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "@theme";
import { GlobalStyle } from "@ninjas/theme/GlobalStyle";

const WebsiteGlobalProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default WebsiteGlobalProvider;
