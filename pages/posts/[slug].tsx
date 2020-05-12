import { GetServerSideProps } from "next";
import Markdown from "react-markdown";
import { Root } from "../../design/Root";

interface PostProps {
  title: string;
  description: string;
  author: string;
  image: string;
  categories: string[];
  date: string;
  draft: boolean;
  dir: string;
  base: string;
  ext: string;
  bodyContent: string;
  bodyHtml: string;
}

const Post: React.FunctionComponent<PostProps> = ({ bodyContent }) => {
  return (
    <Root>
      <Markdown source={bodyContent} />
    </Root>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;
  const content = require(`../../output/${slug}.json`);
  return {
    props: {
      ...content,
    },
  };
};

export default Post;
