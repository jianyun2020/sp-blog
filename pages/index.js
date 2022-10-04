import { getSortedPostsData } from "../lib/posts";
import { useTitle } from "../lib/hooks";
import ArticleBlock from "../components/articleBlock";
import Styles from "../styles/pages.module.scss";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  useTitle("首页");

  return (
    <section className={Styles.postSection}>
      {allPostsData.map((data) => (
        <ArticleBlock {...data} key={data.id} />
      ))}
    </section>
  );
}
