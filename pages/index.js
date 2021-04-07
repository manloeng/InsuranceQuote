import Head from "next/head";
import QuotePage from "../src/components/quote/QuotePage";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yu Life Quote Calulator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Quote Calulator</h1>

        <QuotePage></QuotePage>
      </main>
    </div>
  );
}
