import Link from "next/link";
import Styles from "./articleBlock.module.scss";

export default function ArticleBlock(props) {
  const { id, birthTime, contentHtml, wordCount } = props;

  return (
    <article className={Styles.content}>
      <Link href={`/posts/${id}`}>
        <div className={Styles.title}>{id}</div>
      </Link>
      <ul className={Styles.meta}>
        <li>
          <span>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref={`#icon-rili`}></use>
            </svg>
          </span>
          <span>发表于 {birthTime}</span>
        </li>
        <li>
          <span>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref={`#icon-file-word`}></use>
            </svg>
          </span>
          <span>字数统计 {wordCount}</span>
        </li>
        <li>
          <span>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref={`#icon-view`}></use>
            </svg>
          </span>
          <span>被 {99} 人浏览</span>
        </li>
      </ul>

      <div className={Styles.postBody}>
       <div dangerouslySetInnerHTML={{__html: contentHtml}} ></div>
      </div>
      <Link href={`/posts/${id}`}>
        <div className={Styles.postDetail}>
          <span>
            阅读全文
            <svg className="icon" aria-hidden="true">
              <use xlinkHref={`#icon-jiantou`}></use>
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
}
