import { GetStaticProps } from "next";
import { GraphQLClient } from "graphql-request";
import Head from "next/head";

import HeaderMain from "../../common/components/HeaderMain";
import Footer from "../../common/components/Footer";

import styles from "./styles.module.scss";
import { FaEnvelope, FaUser } from "react-icons/fa";

interface ContatcProps {
  page: {
    heroDescription: {
      html: string;
    }
  };
}

export default function Contact({ page }: ContatcProps) {
  return (
    <>
      <Head>
        <title>Contato | Ariane Brandão</title>
      </Head>

      <main>
        <HeaderMain heroDescription={page.heroDescription.html} />

        <section className="main-section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <section>
                  <h2
                    className={`title has-text-white has-text-centered ${styles.title}`}
                  >
                    Entre em contato
                  </h2>

                  <form
                    encType="application/x-www-form-urlencoded"
                    action="https://getform.io/f/cc08677d-ad92-4da2-a488-fdfb4916afe3"
                    method="POST"
                  >
                    <div className="field">
                      <label className="label">Nome</label>
                      <p className="control has-icons-left">
                        <input
                          className="input"
                          type="text"
                          placeholder="Seu nome"
                          name="name"
                          required
                        />
                        <span className="icon is-small is-left">
                          <FaUser/>
                        </span>
                      </p>
                    </div>
                    <div className="field">
                      <label className="label">E-mail</label>
                      <p className="control has-icons-left">
                        <input
                          className="input"
                          type="email"
                          placeholder="Seu email"
                          name="email"
                          required
                        />

                        <span className="icon is-small is-left">
                          <FaEnvelope/>
                        </span>
                      </p>
                    </div>
                    <div className="field">
                      <label className="label">Mensagem</label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          name="message"
                          placeholder="Quanto mais detalhes, melhor entenderei sua solicitação"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="field is-grouped">
                      <div className="control">
                        <button className="button is-link" type="submit">
                          Enviar
                        </button>
                      </div>
                      <div className="control">
                        <button
                          className="button is-link is-light"
                          type="reset"
                        >
                          Limpar campos
                        </button>
                      </div>
                    </div>
                  </form>
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
      page,
    },
    revalidate: 60 * 60 * 24, //24 hours
  };
};
