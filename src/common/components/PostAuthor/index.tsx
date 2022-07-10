import Image from "next/image";
import Link from "next/link";

import styles from "./postAuthor.module.scss";
import { FaTwitter, FaFacebookF } from "react-icons/fa";

export function PostAuthor() {
  return (
    <section className="mt-5 px-5">
      <div className={`container has-text-light ${styles.author}`}>
        <div className="columns">
          <div className="column is-2 is-flex is-justify-content-center">
            <figure className="image is-128x128 is-inline-block">
              {/* <Image
                className="is-rounded"
                alt="Ariane Brandao profile picture"
                src="https://github.com/arianebrandao.png"
                layout="fill"
              /> */}
            </figure>
          </div>
          <div className="column is-flex is-flex-direction-column is-justify-content-center">
            <h4 className="is-size-4">Ariane Brandão</h4>
            <p>
              Graduada em Análise e Desenvolvimento de Sistemas, trabalho com
              desenvolvimento web e outras tecnologias desde 2010.
            </p>
            <div className="buttons mt-3">
              <Link href="/about">
                <a className="button is-small is-link is-outlined" target="_blank">
                  <span className="icon is-small">
                    <FaTwitter />
                  </span>
                  <span>Tweetar</span>
                </a>
              </Link>

              <Link href="/about">
                <a className="button is-small is-link is-outlined" target="_blank">
                  <span className="icon is-small">
                    <FaFacebookF />
                  </span>
                  <span>Compartilhar</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
