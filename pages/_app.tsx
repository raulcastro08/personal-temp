import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";

const App = (props: AppProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
