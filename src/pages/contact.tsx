import Head from "next/head";

import styles from "./contact.module.scss";

import HeaderMain from "../components/HeaderMain";
import Footer from "../components/Footer";

import { FaEnvelope, FaUser } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contato | Ariane Brandão</title>
      </Head>

      <main>
        <HeaderMain />

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
