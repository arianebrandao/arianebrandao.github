import { GetStaticPaths, GetStaticProps } from "next";
import { GraphQLClient } from "graphql-request";

import styles from "./projects.module.scss";

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});

export default function Project({ project }) {
  return (
    <div>
      <h1 className={styles.teste}>{project.name}</h1>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { projects } = await graphcms.request(
  `
    {
      projects {
        id
        slug
        name
      }
    }
  `);

  return {
    paths: projects.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { project } = await graphcms.request(
    `
    query Project($slug: String!) {
      project(where: { slug: $slug }) {
        id
        name
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
      project,
    },
  };
};
