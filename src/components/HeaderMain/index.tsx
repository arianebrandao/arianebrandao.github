import Link from "next/link";
import Image from "next/image";

import styles from "./headerMain.module.scss";
import SocialButtons from "./SocialButtons";
import { Navbar } from "../Navbar";

export default function HeaderMain() {
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
            <p className={`subtitle  ${styles.subtitle}`}>
              I graduate systems analysis and development in 2016 and since then
              Ive been coding and learning new technologies. I am married and
              have two dogs 💕. Im a gamer and I love watching TV shows and
              volleyball.
            </p>

            <SocialButtons/>

          </div>
        </div>

      </section>
    </header>
  );
}
