import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shoalter | TimeSheet Auto Collection </title>
        <meta
          name="description"
          content="Shaolter TimeSheet Auto Collection is designed for better performance scrutinization."
        />
        <link rel="icon" href="/shoalter_logo.png" />
      </Head>
    </div>
  );
}
