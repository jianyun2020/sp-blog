import Styles from "../../styles/pages.module.scss";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { useTitle } from "../../lib/hooks";
import {useContext, useEffect} from 'react'
import { navContext } from "../../components/layout";

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

  
  const contentArr = postData.contentHtml.split("</nav>")
  const nav = contentArr[0] + "</nav>"
  const setNav = useContext(navContext)
  setNav(nav)
  const content = contentArr[1]

  useEffect(() => {
    return () => {
      setNav('')
    }
  }, [])

  return (
    <>
      <article className={Styles.article}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </>
  );
}
