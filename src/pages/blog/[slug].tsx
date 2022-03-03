import { GetStaticPaths, GetStaticProps } from "next";
import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});

export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await graphcms.request(`
    {
      posts {
        id
        title
        slug
      }
    }
  `);

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { post } = await graphcms.request(
    `
    query Post($slug: String!) {
      post(where: { slug: $slug }) {
        id
        title
        slug
      }
    }
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      post,
    },
  };
};
