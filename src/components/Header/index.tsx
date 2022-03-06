import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import styles from "./header.module.scss";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  //hook do menu hamburger
  const [isNavbarBurgerActive, setIsNavbarBurgerActive] = useState(false);

  return (
    <header>
      <section className="hero is-rainbow is-bold">
        <div className="hero-head">
          <nav className="navbar">
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
                        <span className="icon">
                          <FaGithub />
                        </span>
                        <span>Orçamento</span>
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

            <h1 className={`title my-6 ${styles.title}`}>Ariane Brandão</h1>
            <p className={`subtitle ${styles.subtitle}`}>
              I graduate systems analysis and development in 2016 and since then
              I've been coding and learning new technologies. I am married and
              have two dogs 💕. I'm a gamer and I love watching TV shows and
              volleyball.
            </p>
          </div>
        </div>

        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li className="is-active">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <a>Projetos e portfólio</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>Sobre mim</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Faça um orçamento!</a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
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
