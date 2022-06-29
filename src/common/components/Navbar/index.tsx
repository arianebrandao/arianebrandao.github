import Link from "next/link";
import { useState } from "react";

import ActiveLink from "./ActiveLink";

export function Navbar() {
  //hook do menu hamburger
  const [isNavbarBurgerActive, setIsNavbarBurgerActive] = useState(false);

  return (
    <nav className="navbar flex justify-end">
      <div className="navbar-brand">
        <span
          className={`navbar-burger ${isNavbarBurgerActive ? "is-active" : ""}`}
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
        className={`navbar-menu flex gap-3 mr-4 ${isNavbarBurgerActive ? "is-active" : ""}`}
      >
        <ActiveLink activeClassName="underline" href="/">
          <a className="text-white hover:text-purple-10">Home</a>
        </ActiveLink>
        <ActiveLink activeClassName="underline" href="/projects">
          <a className="text-white hover:text-purple-10">Projetos e portfólio</a>
        </ActiveLink>
        <ActiveLink activeClassName="underline" href="/blog">
          <a className="text-white hover:text-purple-10">Blog</a>
        </ActiveLink>
        <ActiveLink activeClassName="underline" href="/about">
          <a className="text-white hover:text-purple-10">Sobre mim</a>
        </ActiveLink>
        <ActiveLink activeClassName="underline" href="/contact">
          <a className="text-white hover:text-purple-10">Faça um orçamento!</a>
        </ActiveLink>
      </div>
    </nav>
  );
}
