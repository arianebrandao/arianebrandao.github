import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={`mt-5 has-text-centered has-background-dark ${styles.footer}`}>
      <hr className="has-background-link"/>
      <p>
        Ariane Brandão © 2022 <br />
        Made with 💕 (also{" "}
        <Link href="https://www.linkedin.com/in/ariane-brand%C3%A3o">
          <a target="_blank">Bulma</a>
        </Link>
        {", "}
        <Link href="https://graphcms.com">
          <a target="_blank">GraphCMS</a>
        </Link>{" "}
        and {" "}
        <Link href="https://nextjs.org">
          <a target="_blank">NextJS</a>
        </Link>
        ) <br />
        Hosted by{" "}
        <Link href="https://pages.github.com/">
          <a target="_blank">Github Pages</a>
        </Link>
      </p>
    </footer>
  );
}
