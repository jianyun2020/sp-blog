import Image from "next/image";
import Link from "next/link";
import Styles from "./aside.module.scss";
import { useRouter } from "next/router";

export default function Aside({ ...props }) {
  const { pathname } = useRouter();

  return (
    <div className={Styles.content}>
      <div className={Styles.main}>
        {/* HEADER */}
        <header className={Styles.header}>
          {/* 头像 */}
          <Link href="/">
            <div className={Styles.avatar}>
              <Image src={"/images/profile.jpg"} layout="fill" />
            </div>
          </Link>

          <div className={Styles.name}>Kevin</div>
          <div className={Styles.motto}>独属于互联网的记忆。</div>
        </header>

        {/* MAIN */}
        <ul className={Styles.info}>
          <Link href="/articles">
            <li className={Styles.archives}>
              <span>226</span>
              <span>文章</span>
            </li>
          </Link>
          <Link href="/categories">
            <li className={Styles.categories}>
              <span>22</span>
              <span>分类</span>
            </li>
          </Link>
          <Link href="/tags">
            <li className={Styles.tags}>
              <span>88</span>
              <span>标签</span>
            </li>
          </Link>
        </ul>

        {/* FOOTER */}
        <ul className={Styles.menu}>
          <Link href="/">
            <li className={pathname === "/" ? Styles.active : ""}>
              <Button name="首页" type="shouye" />
            </li>
          </Link>
          <Link href="/articles">
            <li className={pathname === "/articles" ? Styles.active : ""}>
              <Button name="文章" type="wenzhang" />
            </li>
          </Link>
          <Link href="/others">
            <li className={pathname === "/others" ? Styles.active : ""}>
              <Button name="其它" type="qita" />
            </li>
          </Link>
          <Link href="/about">
            <li className={pathname === "/about" ? Styles.active : ""}>
              <Button name="关于" type="guanyu" />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export const Button = (props) => {
  const { name, type } = props;

  return (
    <div className={Styles.button}>
      <span>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref={`#icon-${type}`}></use>
        </svg>
      </span>
      <span>{name}</span>
    </div>
  );
};
