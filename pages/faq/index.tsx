import React from "react";
import FAQScreen from "../../@ninjas/components/screens/FAQScreen";
import websitePageHOC from "../../@ninjas/components/wrappers/WebsitePage/hoc";

const FAQPage = () => {
  return <FAQScreen />;
};

// export async function getStaticProps() {
//   const faqCategories = await fetch(
//     "https://instalura-api.vercel.app/api/content/faq"
//   )
//     .then((respostaDoServer) => respostaDoServer.json())
//     .then((respostaConvertida) => respostaConvertida.data);

//   return {
//     props: {
//       faqCategories,
//     }, // will be passed to the page component as props
//   };
// }

export default websitePageHOC(FAQPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: "Perguntas Frequentes",
    },
  },
});
