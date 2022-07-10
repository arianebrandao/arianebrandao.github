import { GetStaticPaths, GetStaticProps } from "next";
import { GraphQLClient } from "graphql-request";
import Image from "next/image";
import Head from "next/head";

import styles from "./project.module.scss";
import HeaderSimple from "../../common/components/HeaderSimple";
import Footer from "../../common/components/Footer";
import { PostAuthor } from "../../common/components/PostAuthor";

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
    descriptionContent: {
      html: string;
    };
    demo: string;
    sourceCode: string;
    image?: {
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
  //Date format
  var getDate = new Date(project.createdAt);
  
  return (
    <>
      <Head>
        <title>{project.name} | Ariane Brandão</title>
      </Head>

      <main>
        <HeaderSimple title={project.name} date={getDate.toLocaleDateString("pt-BR")} linkDemo={project?.demo} linkCode={project?.sourceCode} />

        <section>
          <div className="container px-5">
            <div className={`content`}>
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

              <div className={`has-text-light is-flex is-flex-direction-column ${styles.content}`} dangerouslySetInnerHTML={{__html: project.descriptionContent.html}} />

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
        slug
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
        descriptionContent {
          html
        }
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
