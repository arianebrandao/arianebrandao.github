import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={`mt-5 has-text-centered ${styles.footer}`}>
      <p>
        Ariane Brandão © 2022 <br />
        Made with 💕 (also{" "}
        <Link href="https://www.linkedin.com/in/ariane-brand%C3%A3o">
          <a target="_blank">Bulma</a>
        </Link>{" "}
        and{" "}
        <Link href="https://www.linkedin.com/in/ariane-brand%C3%A3o">
          <a target="_blank">NextJS</a>
        </Link>
        ) <br />
        Hosted by{" "}
        <Link href="https://www.linkedin.com/in/ariane-brand%C3%A3o">
          <a target="_blank">Github Pages</a>
        </Link>
      </p>
    </footer>
  );
}
