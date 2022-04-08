import { GetStaticPaths, GetStaticProps } from "next";
import { GraphQLClient } from "graphql-request";
import Image from "next/image";
import Head from "next/head";

import styles from "./post.module.scss";
import HeaderSimple from "../../components/HeaderSimple";
import { PostAuthor } from "../../components/PostAuthor";
import Footer from "../../components/Footer";

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});

type PostProps = {
  post: {
    id: string;
    title: string;
    slug: string;
    tags: string[];
    createdAt: string;
    descriptionContent: {
      html: string;
    };
    coverImage?: {
      url: string;
      width: string;
      height: string;
    };
  };
};

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | Ariane Brandão</title>
      </Head>

      <main>
        <HeaderSimple title={post.title} date={post.createdAt} />

        <section>
          <div className="container px-5">
            <div className={`content`}>
              <div className="has-text-centered my-5">
                {post?.coverImage.url && (
                  <figure className="is-block">
                    <Image
                      alt={post.title}
                      src={post.coverImage.url}
                      width={post.coverImage.width}
                      height={post.coverImage.height}
                      layout="fixed"
                    />
                  </figure>
                )}

                {post.tags && (
                  <div className="tags is-centered">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag is-link is-clickable">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div
                className={`has-text-light is-flex is-flex-direction-column ${styles.content}`}
                dangerouslySetInnerHTML={{
                  __html: post?.descriptionContent.html,
                }}
              />
            </div>
          </div>
        </section>

        <PostAuthor />

        <Footer />
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await graphcms.request(`
    {
      posts {
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
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { post } = await graphcms.request(
    `
    query Post($slug: String!) {
      post(where: { slug: $slug }) {
        id
        title
        slug
        tags
        createdAt
        descriptionContent {
          html
        }
        coverImage {
          height
          url
          width
        }
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
