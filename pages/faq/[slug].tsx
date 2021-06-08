import React from "react";
// import FAQQuestionScreen from "../../src/components/screens/FAQQuestionScreen";
import websitePageHOC from "../../@ninjas/components/wrappers/WebsitePage/hoc";

// function FAQInternaScreen({ category, question }) {
//   return <FAQQuestionScreen question={question} category={category} />;
// }

// FAQInternaScreen.propTypes = FAQQuestionScreen.propTypes;

// export async function getStaticProps({ params }) {
//   const faqCategories = await fetch(
//     "https://instalura-api.vercel.app/api/content/faq"
//   ).then(async (responseServer) => {
//     const response = await responseServer.json();
//     return response.data;
//   });

//   const dataPage = faqCategories.reduce((amountValue, faqCategory) => {
//     const foundQuestion = faqCategory.questions.find((question) => {
//       if (question.slug === params.slug) {
//         return true;
//       }
//       return false;
//     });

//     if (foundQuestion) {
//       return {
//         ...amountValue,
//         category: faqCategory,
//         question: foundQuestion,
//       };
//     }
//     return amountValue;
//   }, {});

//   return {
//     props: {
//       category: dataPage.category,
//       question: dataPage.question,
//       pageWrapperProps: {
//         seoProps: {
//           headTitle: dataPage.question.title,
//         },
//       },
//     },
//   };
// }

// export async function getStaticPaths() {
//   const faqCategories = await fetch(
//     "https://instalura-api.vercel.app/api/content/faq"
//   ).then(async (responseServer) => {
//     const response = await responseServer.json();
//     return response.data;
//   });
//   const paths = faqCategories.reduce((amountValue, faqCategory) => {
//     const questionsPaths = faqCategory.questions.map((question) => {
//       const questionSlug = question.slug;
//       return { params: { slug: questionSlug } };
//     });
//     return [...amountValue, ...questionsPaths];
//   }, []);

//   return {
//     paths,
//     fallback: false,
//   };
// }

const FAQInternaScreen = () => <div>Teste</div>;

export default websitePageHOC(FAQInternaScreen);
