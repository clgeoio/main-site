import Markdown from "react-markdown";

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
  return <Markdown source={bodyContent} />;
};

export { Post };
export type { PostProps };
