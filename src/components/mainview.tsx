import { Item } from "@/data/data";
import styles from "./mainview.module.css";
import CodeBox from "./codebox";

export default function MainView(props: { items: Item[] }) {
  return (
    <div className={styles.mainview}>
      {props.items.map((v) => (
        <CodeBox item={v} key={v.name} />
      ))}
    </div>
  );
}
