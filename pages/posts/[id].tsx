import Layout from "@/components/Layout";
import { getAllPostIDs, getPostData } from "@/lib/post";

export async function getStaticPaths() {
  const paths = getAllPostIDs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
const Post = ({ postData }) => {
  return <Layout>{postData.title}<br></br>{postData.date}<br></br>{postData.contentHtml}</Layout>;
};


export default Post;
