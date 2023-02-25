import Head from "next/head";
import Link from "next/link";
import { FC, ReactNode } from "react";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Yuki";
export const siteTitle = "Next.js Blog";

type Props = {
  children: ReactNode;
  home?: boolean;
};
export default function Layout({ children, home }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/profile.png"
              width={100}
              height={100}
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img
              src="/profile.png"
              width={100}
              height={100}
              className={`${utilStyles.borderCircle} `}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && <Link href="/">ホームへ戻る</Link>}
    </div>
  );
}
