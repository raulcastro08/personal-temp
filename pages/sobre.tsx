import websitePageHOC from "@ninjas/components/wrappers/WebsitePage/hoc";
import aboutScreen from "@ninjas/components/screens/AboutScreen";

export default websitePageHOC(aboutScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: "Sobre",
    },
    menuProps: {
      display: true,
    },
  },
});
