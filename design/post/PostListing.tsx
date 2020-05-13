import { Fragment } from "react";
import styled from "styled-components";
import Link from "next/link";
import summary from "../../output/summary.json";

interface PostSummary {
  base: string;
  ext: string;
  title: string;
  author: string;
  draft: boolean;
}

const StyledLink = styled.a`
  text-decoration: none;
`;

const PostListing = () => {
  return (
    <Fragment>
      <h2>Latest Posts</h2>
      <div>
        {(summary as PostSummary[]).map(
          (post) =>
            !post.draft && (
              <div key={post.title}>
                <h3>
                  <Link
                    passHref
                    href="posts/[slug]"
                    as={`posts/${post.base.slice(0, -1 * post.ext.length)}`}
                  >
                    <StyledLink>{post.title}</StyledLink>
                  </Link>
                </h3>
                <small>{post.author}</small>
              </div>
            )
        )}
      </div>
    </Fragment>
  );
};

export { PostListing };
