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
      id: string;
      url: string;
      width: string;
      height: string;
      imageProject: {
        name: string;
      }[];
    }[];
  };
};

export default function Project({ project }: ProjectProps) {
  return (
    <>
      <Head>
        <title>{project?.name} | Ariane Brandão</title>
      </Head>

      <main>
        <HeaderSimple />

        <section>
          <div className="container px-5">
            <div className={`content has-text-light ${styles.content}`}>
              <div className="has-text-centered my-5">
                {project.image?.map((img) => {
                  let prjName = img.imageProject.map((prj) => prj.name);

                  return (
                    <figure key={img.id} className="is-block">
                      <Image
                        alt={prjName.toString()}
                        src={img.url}
                        width={img.width}
                        height={img.height}
                        layout="fixed"
                        className=""
                      />
                    </figure>
                  );
                })}

                {project.tags && (
                  <div className="tags is-centered">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag is-link is-clickable">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {project?.description}
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
              <p>
                Ut malesuada, nisi eu suscipit rhoncus, quam erat egestas neque,
                a imperdiet dui nisl et magna. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos. In
                elementum, tellus maximus rhoncus laoreet, turpis lectus
                faucibus justo, sit amet aliquet risus quam ultrices ante.
                Vestibulum pulvinar pulvinar orci sit amet mattis. Praesent a
                ultricies leo. Donec quis suscipit purus. Vestibulum convallis
                nisl eu diam venenatis pellentesque.
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
          id
          url
          width
          height
          imageProject {
            name
          }
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
          id
          url
          width
          height
          imageProject {
            name
          }
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
      project,
    },
  };
};
