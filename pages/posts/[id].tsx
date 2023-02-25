import Layout from "@/components/Layout";
import type { GetStaticProps } from "next";
import { getAllPostIDs, getPostData } from "@/lib/post";
import { FC } from "react";

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
      {postData.title}
      <br></br>
      {postData.date}
      <br></br>
      {postData.contentHtml}
    </Layout>
  );
};

export default Post;
