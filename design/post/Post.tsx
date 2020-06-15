import Markdown from "react-markdown";

import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import {
  Heading,
  Image as ImageBox,
  List as ListBox,
  ListItem as ListItemBox,
} from "@chakra-ui/core";

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

const CodeBlock: React.FunctionComponent<SyntaxHighlighterProps> = ({
  language,
  value,
}) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

const Image: React.FunctionComponent<unknown> = (props) => {
  return <ImageBox {...props} />;
};

const Header: React.FunctionComponent<{ level: number }> = ({
  level,
  children,
}) => {
  switch (level) {
    case 1:
      return (
        <Heading as="h1" size="xl">
          {children}
        </Heading>
      );
    case 2:
      return (
        <Heading as="h2" size="lg">
          {children}
        </Heading>
      );
    case 3:
      return (
        <Heading as="h3" size="md">
          {children}
        </Heading>
      );
    case 4:
      return (
        <Heading as="h4" size="sm">
          {children}
        </Heading>
      );
    case 5:
      return (
        <Heading as="h5" size="xs">
          {children}
        </Heading>
      );
    case 6:
      return (
        <Heading as="h6" size="xs">
          {children}
        </Heading>
      );
  }
};

const List: React.FunctionComponent<{ ordered: boolean }> = ({
  ordered,
  children,
}) => {
  return (
    <ListBox
      as={ordered ? "ol" : "ul"}
      styleType={ordered ? "decimal" : "disc"}
    >
      {children}
    </ListBox>
  );
};

const ListItem: React.FunctionComponent = ({ children }) => {
  return <ListItemBox>{children}</ListItemBox>;
};

const Post: React.FunctionComponent<PostProps> = ({ bodyContent }) => {
  return (
    <Markdown
      source={bodyContent}
      renderers={{
        code: CodeBlock,
        image: Image,
        heading: Header,
        list: List,
        listItem: ListItem,
      }}
    />
  );
};

export { Post };
export type { PostProps };
