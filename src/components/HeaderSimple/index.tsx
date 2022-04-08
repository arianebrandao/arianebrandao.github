import styles from "./headerSimple.module.scss";
import { Navbar } from "../Navbar";

import { FaGithubAlt, FaCogs } from "react-icons/fa";
import Link from "next/link";

export default function HeaderMain({
  title,
  date,
  linkDemo = null,
  linkCode = null,
}) {
  //Date format
  var getDate = new Date(date)

  return (
    <header>
      <section className={`hero is-link is-bold`}>
        <div className="hero-head">
          <Navbar />
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className={`title my-6 has-text-grey-darker ${styles.title}`}>
              {title}
            </h1>
            <p className={`subtitle  ${styles.subtitle}`}>
              {getDate.toLocaleDateString("pt-BR")}
            </p>

            <div className="buttons is-centered">
              <Link href={linkDemo}>
                <a className="button is-info" target="_blank">
                  <span className="icon is-small">
                    <FaCogs />
                  </span>
                  <span>Demo</span>
                </a>
              </Link>

              <Link href={linkCode}>
                <a className="button is-info" target="_blank">
                  <span className="icon is-small">
                    <FaGithubAlt />
                  </span>
                  <span>Código fonte</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
