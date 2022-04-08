import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { GraphQLClient } from "graphql-request";

import Footer from "../../components/Footer";
import HeaderMain from "../../components/HeaderMain";

import styles from "./allprojects.module.scss";

type ProjectsProps = {
  projects: {
    id: string;
    slug: string;
    name: string;
  }[]
}


export default function Projects({projects}: ProjectsProps) {
  return (
    <>
    <Head>
      <title>Projetos e portfólio | Ariane Brandão</title>
    </Head>

    <main>
      <HeaderMain />

      <section className="main-section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <section>
                <h2 className={`title has-text-white has-text-centered ${styles.title}`}>
                  Projetos e portfólio
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
      projects,
    },
    revalidate: 60 * 60 * 24, //24 hours
  };
};
