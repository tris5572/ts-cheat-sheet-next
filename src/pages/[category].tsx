import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/sidebar";
import { Categories, Item, cheatSheetData } from "@/data/data";
import MainView from "@/components/mainview";
import { GetStaticPaths, GetStaticProps } from "next";

type PathParams = {
  category: Categories;
};

type Props = { items: Item[]; category: Categories };

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  return {
    paths: [
      { params: { category: "General" } },
      { params: { category: "Type" } },
      { params: { category: "String" } },
      { params: { category: "Math" } },
      { params: { category: "Data" } },
    ],
    fallback: false,
  };
};

export default function Page(props: Props) {
  return (
    <>
      <Head>
        <title>TypeScript チートシート</title>
        <meta name="description" content="TypeScriptのチートシート" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">
        <Sidebar selected={props.category} />
        <main className={styles.main}>
          <MainView items={props.items} />
        </main>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { category } = context.params as PathParams;
  const items = [];

  for (const c of cheatSheetData) {
    if (c.category === category) {
      items.push(c);
    }
  }

  return {
    props: {
      items,
      category,
    },
  };
};
