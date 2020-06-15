import Link from "next/link";
import summary from "../../output/summary.json";
import {
  Box,
  Heading,
  Stack,
  Text,
  Link as LinkBox,
  Flex,
} from "@chakra-ui/core";

interface PostSummary {
  base: string;
  ext: string;
  title: string;
  author: string;
  date: string;
  draft: boolean;
}

const PostListing = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" marginBottom={5}>
        Latest Posts
      </Heading>
      <Stack spacing={5}>
        {(summary as PostSummary[]).map((post) => {
          const date = new Date(post.date);

          return (
            !post.draft && (
              <Box key={post.title} padding={5} shadow="md" borderWidth="1px">
                <Heading as="h3" size="lg">
                  <Link
                    passHref
                    href="posts/[slug]"
                    as={`posts/${post.base.slice(0, -1 * post.ext.length)}`}
                  >
                    <LinkBox>{post.title}</LinkBox>
                  </Link>
                </Heading>
                <Flex marginTop={5}>
                  <Text>{post.author}</Text>
                  <Text marginLeft={3}>~</Text>
                  <Text marginLeft={3}>
                    {date.getFullYear()}-{`${date.getMonth()}`.padStart(2, "0")}
                    -{`${date.getDay()}`.padStart(2, "0")}
                  </Text>
                </Flex>
              </Box>
            )
          );
        })}
      </Stack>
    </Box>
  );
};

export { PostListing };
