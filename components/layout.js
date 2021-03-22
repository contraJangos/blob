import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";

export const siteTitle = "Blob";

export default function Layout({ children, name, description }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blob</title>
        <link rel="icon" href="/logo1.png" />
        <meta name="description" content="Our personal blog using Next.js" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        
      </header>
      <main>{children}</main>
    </div>
  );
}
