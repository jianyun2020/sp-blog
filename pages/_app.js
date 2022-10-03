import "../styles/global.scss";
import Script from "next/script";
import Layout from "../components/layout";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link
          rel="shortcut icon"
          href="../public/images/favicon.ico"
        />
      </Head>
      <Component {...pageProps} />
      <Script src="//at.alicdn.com/t/c/font_3684376_poom9m0chgp.js" />
    </Layout>
  );
}
