import Link from "next/link";
import Image from "next/image";

import SocialButtons from "./SocialButtons";
import { Navbar } from "../Navbar";

import styles from "./headerMain.module.scss";

interface HeaderMainProps {
  heroDescription: string;
}

export default function HeaderMain({ heroDescription }: HeaderMainProps) {
  return (
    <header>
      <section className={`hero is-link is-bold`}>
        <div className="hero-head">
          <Navbar />
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <Link href="/about">
              <a>
                <figure className="image is-128x128 is-inline-block is-clickable">
                  <Image
                    className="is-rounded"
                    alt="Ariane Brandao profile picture"
                    src="https://github.com/arianebrandao.png"
                    layout="fill"
                  />
                </figure>
              </a>
            </Link>
            <h1 className={`title my-6 has-text-grey-darker ${styles.title}`}>
              Ariane Brandão
            </h1>
            <div className={`has-text-light ${styles.content}`} />

            <p
              className={`subtitle  ${styles.subtitle}`}
              dangerouslySetInnerHTML={{
                __html: heroDescription,
              }}
            />

            <SocialButtons />
          </div>
        </div>
      </section>
    </header>
  );
}
