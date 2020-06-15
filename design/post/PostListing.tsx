import Link from "next/link";
import summary from "../../output/summary.json";
import { Box, Heading, Stack, Text } from "@chakra-ui/core";

interface PostSummary {
  base: string;
  ext: string;
  title: string;
  author: string;
  draft: boolean;
}

const PostListing = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" marginBottom={5}>
        Latest Posts
      </Heading>
      <Stack spacing={5}>
        {(summary as PostSummary[]).map(
          (post) =>
            !post.draft && (
              <Box key={post.title} padding={5} shadow="md" borderWidth="1px">
                <Heading as="h3" size="lg">
                  <Link
                    passHref
                    href="posts/[slug]"
                    as={`posts/${post.base.slice(0, -1 * post.ext.length)}`}
                  >
                    {post.title}
                  </Link>
                </Heading>
                <Text mt={4}>{post.author}</Text>
              </Box>
            )
        )}
      </Stack>
    </Box>
  );
};

export { PostListing };
