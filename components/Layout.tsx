import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Yuki";
export const siteTitle = "Next.js Blog";

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/profile.png" width={100} height={100} className={utilStyles.borderCircle} />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
