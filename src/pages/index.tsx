import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";
import { GraphQLClient } from "graphql-request";

import HeaderMain from "../common/components/HeaderMain";
import Footer from "../common/components/Footer";

type Post = {
  id: string;
  slug: string;
  title: string;
};

type Project = {
  id: string;
  slug: string;
  name: string;
};

interface HomeProps {
  posts: Post[];
  projects: Project[];
  page: {
    heroDescription: {
      html: string;
    };
  };
}

export default function Home({ page, posts, projects }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Ariane Brandão</title>
      </Head>

      <main>
        <HeaderMain heroDescription={page.heroDescription.html} />

        <section className="container columns-2 gap-4">
          <div className="text-right">
            <h2 className="text-3xl my-8">
              Projetos
            </h2>
            <ul>
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
          </div>

          <div className="text-left">
            <h2 className="text-3xl my-8">Posts</h2>
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
      projects,
      page,
    },
    revalidate: 60 * 60 * 24, //24 hours
  };
};
