import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { GraphQLClient } from "graphql-request";

import Footer from "../../components/Footer";
import HeaderMain from "../../components/HeaderMain";

import styles from "./allposts.module.scss";

type PostsProps = {
  posts: {
    id: string;
    slug: string;
    title: string;
  }[]
}

export default function Posts({posts}: PostsProps) {
  return (
    <>
    <Head>
      <title>Blog | Ariane Brandão</title>
    </Head>

    <main>
      <HeaderMain />

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

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 24, //24 hours
  };
};
