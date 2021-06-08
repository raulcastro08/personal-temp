import websitePageHOC from "@ninjas/components/wrappers/WebsitePage/hoc";
import contactScreen from "@ninjas/components/screens/ContactScreen";

export default websitePageHOC(contactScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: "Contato",
    },
    menuProps: {
      display: true,
    },
  },
});
