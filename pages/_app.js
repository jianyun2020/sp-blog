import "../styles/global.scss";
import Script from "next/script";
import Layout from "../components/layout";
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />{" "}
      <Script src="//at.alicdn.com/t/c/font_3684376_jut7jndboak.js" />
    </Layout>
  );
}
