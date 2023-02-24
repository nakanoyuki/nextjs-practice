import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "@/components/Layout";
import utilsStyle from "../styles/utils.module.css";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <section className={`${utilsStyle.headingMd} ${utilsStyle.padding1px}`}>
          <p>Next.jsの演習</p>
        </section>

        <div>
          <h2>エンジニアのブログ</h2>
          <div className={styles.grid}>
            <article>
              <Link href="/">
                <img src="./images/thumbnail01.jpg" className={styles.thumbnailImage} />
              </Link>
              <Link href="/">
                <div className={utilsStyle.boldText}>SSGとSSRの使い分けはいつなのか？</div>
              </Link>
              <br></br>
              <small className={utilsStyle.lightText}>2023.02.24</small>
            </article>
            <article>
              <Link href="/">
                <img src="./images/thumbnail01.jpg" className={styles.thumbnailImage} />
              </Link>
              <Link href="/">
                <div className={utilsStyle.boldText}>SSGとSSRの使い分けはいつなのか？</div>
              </Link>
              <br></br>
              <small className={utilsStyle.lightText}>2023.02.24</small>
            </article>
            <article>
              <Link href="/">
                <img src="./images/thumbnail01.jpg" className={styles.thumbnailImage} />
              </Link>
              <Link href="/">
                <div className={utilsStyle.boldText}>SSGとSSRの使い分けはいつなのか？</div>
              </Link>
              <br></br>
              <small className={utilsStyle.lightText}>2023.02.24</small>
            </article>
            <article>
              <Link href="/">
                <img src="./images/thumbnail01.jpg" className={styles.thumbnailImage} />
              </Link>
              <Link href="/">
                <div className={utilsStyle.boldText}>SSGとSSRの使い分けはいつなのか？</div>
              </Link>
              <br></br>
              <small className={utilsStyle.lightText}>2023.02.24</small>
            </article>
          </div>
        </div>
      </Layout>
    </>
  );
}
