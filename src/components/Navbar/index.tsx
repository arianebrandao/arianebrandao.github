import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  //hook do menu hamburger
  const [isNavbarBurgerActive, setIsNavbarBurgerActive] = useState(false);

  return (
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
          className={`navbar-menu ${isNavbarBurgerActive ? "is-active" : ""}`}
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
                <a className="button is-info">
                  <span>Faça um orçamento!</span>
                </a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
