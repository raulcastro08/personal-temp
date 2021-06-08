import React from "react";
import { NextComponentType } from "next";
import { BaseContext, NextPageContext } from "next/dist/next-server/lib/utils";

import WebsitePageWrapper, { WebsitePageWrapperProps } from "..";
import WebsiteGlobalProvider from "../provider";

type WebsitePageHOCParams = {
  pageWrapperProps?: WebsitePageWrapperProps;
};

export default function websitePageHOC<
  P,
  IP = unknown,
  C extends BaseContext = NextPageContext
>(PageComponent: NextComponentType<C, IP, P>, params?: WebsitePageHOCParams) {
  return (props: P) => {
    return (
      <WebsiteGlobalProvider>
        <WebsitePageWrapper {...params?.pageWrapperProps}>
          <PageComponent {...props} />
        </WebsitePageWrapper>
      </WebsiteGlobalProvider>
    );
  };
}
