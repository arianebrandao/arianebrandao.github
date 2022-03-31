import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import styles from "./header.module.scss";
import { FaGithub } from "react-icons/fa";
import SocialButtons from "./SocialButtons";

export default function Header() {
  //hook do menu hamburger
  const [isNavbarBurgerActive, setIsNavbarBurgerActive] = useState(false);

  return (
    <header>
      <section className={`hero is-link is-bold`}>
        <div className="hero-head">
          <nav className="navbar is-link">
            <div className="container">
              <div className="navbar-brand">
                <span
                  className={`navbar-burger ${
                    isNavbarBurgerActive ? "is-active" : ""
                  }`}
                  data-target="navbarMenuHeroB"
                  aria-label="menu"
                  aria-expanded="false"
                  onClick={() => {
                    setIsNavbarBurgerActive(!isNavbarBurgerActive);
                  }}
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </span>
              </div>
              <div
                id="navbarMenuHeroB"
                className={`navbar-menu ${
                  isNavbarBurgerActive ? "is-active" : ""
                }`}
              >
                <div className="navbar-end">
                  <Link href="/">
                    <a className="navbar-item is-active">Home</a>
                  </Link>
                  <Link href="/projects">
                    <a className="navbar-item">Projetos e portfólio</a>
                  </Link>
                  <Link href="/blog">
                    <a className="navbar-item">Blog</a>
                  </Link>
                  <Link href="/about">
                    <a className="navbar-item">Sobre mim</a>
                  </Link>
                  <span className="navbar-item">
                    <Link href="/contact">
                      <a className="button is-info is-inverted">
                        <FaGithub className="icon" />
                        <span>Faça um orçamento!</span>
                      </a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </nav>
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

// export const getStaticProps: GetStaticProps = async () => {
//   const postsResponse = await api.get('/articles?_limit=2')

//   const articles = postsResponse.data.map(article => {
//     return {
//       id: article.id,
//       title: article.title,
//       slug: article.slug,
//       category: article.category,
//     }
//   })

//   return {
//     props: {
//       articles
//     },
//     revalidate: 1 * 1 * 1, // 30m = second * minute * hour
//   }
// };
