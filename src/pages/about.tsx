import { GetStaticProps } from "next";
import { GraphQLClient } from "graphql-request";
import Head from "next/head";

import styles from "./about.module.scss";

import HeaderMain from "../components/HeaderMain";
import Footer from "../components/Footer";

interface AboutProps {
  about: {
    id: string;
    descriptionContent: {
      html: string;
    };
  };
}

export default function About({ about }: AboutProps) {
  return (
    <>
      <Head>
        <title>Sobre mim | Ariane Brandão</title>
      </Head>

      <main>
        <HeaderMain />

        <section className="main-section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <section>
                  <h2 className={`title has-text-white has-text-centered ${styles.title}`}>
                    Sobre mim
                  </h2>

                  <div
                    className={`has-text-light ${styles.content}`}
                    dangerouslySetInnerHTML={{
                      __html: about?.descriptionContent.html,
                    }}
                  />
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

  const { about } = await graphcms.request(
    `
      query About($id: ID!) {
        about(where: { id: $id }) {
          id
          descriptionContent {
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
      about,
    },
    revalidate: 60 * 60 * 24, //24 hours
  };
};
