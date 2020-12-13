import { AppProps } from "next/app";
import "../globalStyle.css";
import Layout from "../app/features/layout/Layout";
import React from "react";
React.useLayoutEffect = React.useEffect;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
