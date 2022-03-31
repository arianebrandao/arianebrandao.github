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

export default function Home({ posts, projects }) {
  return (
    <>
      <Head>
        <title>Home | Ariane Brandão</title>
      </Head>

      <main>
        <Header />

        <section className={styles["main-section"]}>
          <div className="container">
            {/* <h1 className={`title has-text-centered has-text-white ${styles.last}`}>Últimos</h1> */}
            <div className="columns">
              <div className="column">
                <section className="has-text-right mr-5">
                  <h2 className={`title has-text-white ${styles.title}`}>
                    Projetos
                  </h2>
                  <ul className={styles.list}>
                    {projects?.map((project) => {
                      return (
                        <li key={project.id}>
                          <Link href={`/projects/${project.slug}`}>
                            {project.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              </div>
              <div className="column">
                <section className="has-text-left ml-5">
                  <h2 className={`title has-text-white ${styles.title}`}>
                    Posts
                  </h2>
                  <ul className={styles.list}>
                    {posts?.map((post) => {
                      return (
                        <li key={post.id}>
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
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

  const { projects } = await graphcms.request(
    `
      {
        projects {
          id
          slug
          name
        }
      }
    `
  );

  return {
    props: {
      posts,
      projects,
    },
    revalidate: 60 * 60 * 24, //24 hours
  };
};
