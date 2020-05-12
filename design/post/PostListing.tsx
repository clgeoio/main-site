import { Fragment } from "react";
import Link from "next/link";
import summary from "../../output/summary.json";

interface PostSummary {
  base: string;
  ext: string;
  title: string;
  author: string;
}

const PostListing = () => {
  return (
    <Fragment>
      <p>Posts Listing!</p>

      <div>
        {(summary as PostSummary[]).map((post, index) => (
          <Link
            key={index}
            href="posts/[slug]"
            as={`posts/${post.base.slice(0, -1 * post.ext.length)}`}
          >
            <div>
              <h1>{post.title}</h1>
              <small>{post.author}</small>
            </div>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export { PostListing };
