import Layout from "@/components/Layout";
import type { GetStaticProps } from "next";
import { getAllPostIDs, getPostData } from "@/lib/post";
import { FC } from "react";
import utilStyle from "../../styles/utils.module.css";
import Head from "next/head";

type PostData = {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
};
export async function getStaticPaths() {
  const paths = getAllPostIDs();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
const Post: FC<PostData> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyle.headingX1}>{postData.title}</h1>
        <div className={utilStyle.lightText}>{postData.date}</div>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default Post;
