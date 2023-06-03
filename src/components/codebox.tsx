import { Item } from "@/data/data";
import { Highlight, themes } from "prism-react-renderer";
import styles from "./codebox.module.css";

export default function CodeBox(props: { item: Item }) {
  return (
    <div className={styles.box}>
      <p className={styles.name}>{props.item.name}</p>
      <Code code={props.item.code.trim()} />
    </div>
  );
}

function Code({ code }: { code: string }) {
  return (
    <Highlight theme={themes.vsLight} code={code} language="tsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style} className={styles.pre}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {/* <span>{i + 1}</span> */}
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
