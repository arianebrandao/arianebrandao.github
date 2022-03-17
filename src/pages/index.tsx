import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";
import { GraphQLClient } from "graphql-request";

import styles from "./home.module.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";

type Article = {
  data: {
    title: string;
    slug: string;
    publishedAt: string;
    categories: {
      name: string;
    }[];
  };
};

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Home | Ariane Brandão</title>
      </Head>

      <main>
        <Header />

        <section className={styles.projects}>
          <div className="container has-text-centered">
            <h1 className={`title ${styles.title}`}>Projetos recentes</h1>
            <ul>
              {posts?.map((post) => {
                return (
                  <li key={post.id}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="mt-6">
          <div className="container">
            <div className="content">
              <h1 className={styles.teste}>Trabalhos e posts recentes</h1>
              <ul>
                {posts?.map((post) => {
                  return (
                    <li key={post.id}>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
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
