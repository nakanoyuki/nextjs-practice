import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout, { siteTitle } from "@/components/Layout";
import utilsStyle from "../styles/utils.module.css";
import { getPostsData } from "@/lib/post";
import type { PostData } from "../lib/post";

type Props = {
  allPostsData: PostData[];
};
export async function getStaticProps() {
  const allPostsData = getPostsData(); //id,post,data,thumbnail

  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: Props) {
  return (
    <>
      <Head>
        <title> {siteTitle}</title>
      </Head>
      <Layout home>
        <section className={`${utilsStyle.headingMd} ${utilsStyle.padding1px}`}>
          <p>Next.jsの演習</p>
        </section>

        <div>
          <h2>エンジニアのブログ</h2>
          <div className={styles.grid}>
            {allPostsData.map(({ id, title, date, thumbnail }) => (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <img src={thumbnail} className={styles.thumbnailImage} />
                  <div className={utilsStyle.boldText}>{title}</div>
                </Link>
                <br></br>
                <small className={utilsStyle.lightText}>{date}</small>
              </article>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
