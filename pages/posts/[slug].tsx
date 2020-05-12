import { GetServerSideProps } from "next";
import { Root } from "../../design/Root";
import { PostProps, Post } from "../../design/post/Post";

const PostSlug: React.FunctionComponent<PostProps> = (props) => {
  return (
    <Root>
      <Post {...props} />
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

export default PostSlug;
