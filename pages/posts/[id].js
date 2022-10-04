import Styles from "../../styles/pages.module.scss";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { useTitle } from "../../lib/hooks";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  useTitle(postData.title);

  const contentArr = postData.contentHtml.split("</nav>");
  const nav = contentArr[0] + "</nav>";
  const content = contentArr[1];
  
  return (
    <>
      <article className={Styles.article}>
        <div
          className={Styles.post}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className={Styles.nav} dangerouslySetInnerHTML={{ __html: nav }} />
      </article>
    </>
  );
}
