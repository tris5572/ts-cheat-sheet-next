import Link from "next/link";
import styles from "./sidebar.module.css";
import { Categories } from "@/data/data";

export default function Sidebar(props: { selected: Categories }) {
  return (
    <nav className={styles.nav}>
      {/* <input className={styles.input} placeholder="Search..." /> */}
      <h1 className={styles.title}>
        TypeScript
        <br />
        チートシート
      </h1>
      <Link href="/" className={props.selected == "All" ? styles.selected : ""}>
        すべて
      </Link>
      <Link
        href="/General"
        className={props.selected == "General" ? styles.selected : ""}
      >
        一般・制御
      </Link>
      <Link
        href="/Type"
        className={props.selected == "Type" ? styles.selected : ""}
      >
        型
      </Link>
      <Link
        href="/Math"
        className={props.selected == "Math" ? styles.selected : ""}
      >
        数値
      </Link>
      <Link
        href="/String"
        className={props.selected == "String" ? styles.selected : ""}
      >
        文字列
      </Link>
      <Link
        href="/Data"
        className={props.selected == "Data" ? styles.selected : ""}
      >
        データ構造
      </Link>
    </nav>
  );
}
