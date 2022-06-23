import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { GraphQLClient } from "graphql-request";

import Footer from "../../common/components/Footer";
import HeaderMain from "../../common/components/HeaderMain";

import styles from "./allposts.module.scss";

interface PostsProps {
  posts: {
    id: string;
    slug: string;
    title: string;
  }[];
  page: {
    heroDescription: {
      html: string;
    }
  };
}

export default function Posts({posts, page}: PostsProps) {
  return (
    <>
    <Head>
      <title>Blog | Ariane Brandão</title>
    </Head>

    <main>
      <HeaderMain heroDescription={page.heroDescription.html} />

      <section className="main-section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <section>
                <h2 className={`title has-text-white has-text-centered ${styles.title}`}>
                  Meu blog
                </h2>
                <ul className={styles.list}>
                  {posts?.map((post) => {
                    return (
                      <li key={post.id}>
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const { posts } = await graphcms.request(
    `
      {
        posts {
          id
          slug
          title
        }
      }
    `
  );

  const { page } = await graphcms.request(
    `
      query Page($id: ID!) {
        page(where: { id: $id }) {
          heroDescription {
            html
          }
        }
      }
    `,
    {
      id: "cl1qka88x0aoq0alymb1aufw6",
    }
  );

  return {
    props: {
      posts,
      page,
    },
    revalidate: 60 * 60 * 24, //24 hours
  };
};
