import Link from "next/link";
import Styles from "./articleBlock.module.scss";

export default function ArticleBlock(props) {
  const { id, date, data, wordcount } = props;

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
          <span>发表于 {date}</span>
        </li>
        <li>
          <span>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref={`#icon-file-word`}></use>
            </svg>
          </span>
          <span>字数统计 {wordcount}</span>
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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae possimus
        quaerat earum velit laudantium? Quia debitis fugiat quam porro aperiam
        ratione aliquam, obcaecati repudiandae iusto quisquam soluta culpa qui
        earum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
        possimus quaerat earum velit laudantium? Quia debitis fugiat quam porro
        aperiam ratione aliquam, obcaecati repudiandae iusto quisquam soluta
        culpa qui earum. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Quae possimus quaerat earum velit laudantium? Quia debitis fugiat
        quam porro aperiam ratione aliquam, obcaecati repudiandae iusto quisquam
        soluta culpa qui earum. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Quae possimus quaerat earum velit laudantium? Quia
        debitis fugiat quam porro aperiam ratione aliquam, obcaecati repudiandae
        iusto quisquam soluta culpa qui earum. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Quae possimus quaerat earum velit
        laudantium? Quia debitis fugiat quam porro aperiam ratione aliquam,
        obcaecati repudiandae iusto quisquam soluta culpa qui earum. Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Quae possimus quaerat
        earum velit laudantium? Quia debitis fugiat quam porro aperiam ratione
        aliquam, obcaecati repudiandae iusto quisquam soluta culpa qui earum.
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
