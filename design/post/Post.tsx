import Markdown from "react-markdown";
import styled from "styled-components";

import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";

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

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CodeBlock: React.FunctionComponent<SyntaxHighlighterProps> = ({
  language,
  value,
}) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

const Image: React.FunctionComponent<unknown> = (props) => {
  return (
    <CenterWrapper>
      <img {...props} style={{ maxWidth: "50%" }} />
    </CenterWrapper>
  );
};

const Post: React.FunctionComponent<PostProps> = ({ bodyContent }) => {
  return (
    <Markdown
      source={bodyContent}
      renderers={{ code: CodeBlock, image: Image }}
    />
  );
};

export { Post };
export type { PostProps };
