import { GetStaticPaths, GetStaticProps } from "next";
import { GraphQLClient } from "graphql-request";
import Image from "next/image";
import Head from "next/head";

import styles from "./projects.module.scss";
import HeaderSimple from "../../components/HeaderSimple";
import Footer from "../../components/Footer";
import { PostAuthor } from "../../components/PostAuthor";

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});

type ProjectProps = {
  project: {
    id: string;
    name: string;
    slug: string;
    tags: string[];
    createdAt: string;
    description: string;
    demo: string;
    sourceCode: string;
    image: {
      url: string;
    }
  };
};

export default function Project({ project }: ProjectProps) {
  return (
    <>
      <Head>
        <title>{project.name} | Ariane Brandão</title>
      </Head>

      <main>
        <HeaderSimple />

        { project.tags }

        <section className="main-section">
          <div className="tags is-centered">
            <span className="tag is-link">All</span>
            <span className="tag is-link">Medium</span>
            <span className="tag is-link">Size</span>
          </div>

          <div className="container px-5">
            <div className={`content has-text-light ${styles.content}`}>

            {/* <figure className="image is-128x128 is-inline-block">
              <Image
                className="is-rounded"
                alt="Ariane Brandao profile picture"
                src={ project.image.url }
                layout="fill"
              />
            </figure> */}

              { project.image[0].url }

              { project?.description }
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                nisi ipsum, rhoncus ut dapibus at, scelerisque vitae massa.
                Morbi consectetur nunc vitae fermentum commodo. Nulla id
                imperdiet nunc. Morbi vestibulum auctor semper. Mauris vel
                turpis vitae nunc pretium commodo sed et justo. Nam vitae arcu
                in libero ullamcorper rhoncus ac vel ante. Praesent tempus
                accumsan rhoncus. Morbi faucibus suscipit nunc cursus
                consectetur.
              </p>
              <p>Ut malesuada, nisi eu suscipit rhoncus, quam erat
                egestas neque, a imperdiet dui nisl et magna. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. In elementum, tellus maximus rhoncus
                laoreet, turpis lectus faucibus justo, sit amet aliquet risus
                quam ultrices ante. Vestibulum pulvinar pulvinar orci sit amet
                mattis. Praesent a ultricies leo. Donec quis suscipit purus.
                Vestibulum convallis nisl eu diam venenatis pellentesque.
              </p>
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
  const { projects } = await graphcms.request(
    `
    {
      projects {
        id
        name
        slug
        tags
        createdAt
        description
        demo
        sourceCode
        image {
          url
        }
      }
    }
  `
  );

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
        tags
        createdAt
        description
        demo
        sourceCode
        image {
          url
        }
      }
    }
  `,
    {
      slug: params.slug,
    }
  );

  console.log(project)

  return {
    props: {
      project,
    },
  };
};
