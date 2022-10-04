import "../styles/global.scss";
import Script from "next/script";
import Layout from "../components/layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {

  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta name="description" content="Jianyun's Blog, 前端, JavaScript, TypeScript, React, Vue" />
        <meta name="keywords" content="Jianyun's Blog, 前端, JavaScript, TypeScript, React, Vue" />
        <link
          rel="stylesheet"
          href="//unpkg.com/@highlightjs/cdn-assets@11.6.0/styles/default.min.css"
        ></link>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Jianyun's Blog</title>
      </Head>
      <Component {...pageProps} />
      <Script src="//at.alicdn.com/t/c/font_3684376_poom9m0chgp.js" />
    </Layout>
  );
}
