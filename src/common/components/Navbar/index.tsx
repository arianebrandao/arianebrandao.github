import Link from "next/link";
import { useState } from "react";

import ActiveLink from "./ActiveLink";

export function Navbar() {
  //hook do menu hamburger
  const [isNavbarBurgerActive, setIsNavbarBurgerActive] = useState(false);

  return (
    <nav className="navbar flex justify-end ">
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
          <a className="">Home</a>
        </ActiveLink>
        <ActiveLink activeClassName="underline" href="/projects">
          <a className="">Projetos e portfólio</a>
        </ActiveLink>
        <ActiveLink activeClassName="underline" href="/blog">
          <a className="">Blog</a>
        </ActiveLink>
        <ActiveLink activeClassName="underline" href="/about">
          <a className="">Sobre mim</a>
        </ActiveLink>
        <ActiveLink activeClassName="underline" href="/contact">
          <a className="button is-info">Faça um orçamento!</a>
        </ActiveLink>
      </div>
    </nav>
  );
}
