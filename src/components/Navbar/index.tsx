import Link from "next/link";
import { useState } from "react";

import ActiveLink from './ActiveLink'

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
            <ActiveLink activeClassName="is-active" href="/">
              <a className="navbar-item">Home</a>
            </ActiveLink>
            <ActiveLink activeClassName="is-active" href="/projects">
              <a className="navbar-item">Projetos e portfólio</a>
            </ActiveLink>
            <ActiveLink activeClassName="is-active" href="/blog">
              <a className="navbar-item">Blog</a>
            </ActiveLink>
            <ActiveLink activeClassName="is-active" href="/about">
              <a className="navbar-item">Sobre mim</a>
            </ActiveLink>
            <span className="navbar-item">
              <ActiveLink activeClassName="is-active" href="/contact">
                <a className="button is-info">
                  <span>Faça um orçamento!</span>
                </a>
              </ActiveLink>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
