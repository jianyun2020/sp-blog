import { getSortedPostsData } from "../lib/posts";
import { useTitle } from "../lib/hooks";
import ArticleBlock from "../components/articleBlock";

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
    <section >
      {allPostsData.map((data) => (
        <ArticleBlock {...data} key={data.id} />
      ))}
    </section>
  );
}
