import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/sidebar";
import { Item, cheatSheetData } from "@/data/data";
import MainView from "@/components/mainview";

type Props = { items: Item[] };

export default function Home(props: Props) {
  return (
    <>
      <Head>
        <title>TypeScript チートシート</title>
        <meta name="description" content="TypeScriptのチートシート" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">
        <Sidebar selected="All" />
        <main className={styles.main}>
          <MainView items={props.items} />
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const items = [];
  for (const c of cheatSheetData) {
    items.push(c);
  }

  return {
    props: {
      items,
    },
  };
}
