import React from "react";
import Aside from "./aside";
import Styles from "./layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={Styles.layout}>
      <aside className={Styles.leftAside}>
        <Aside />
      </aside>
      <main className={Styles.main}>{children}</main>
    </div>
  );
}
