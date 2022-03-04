import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <section className="hero is-rainbow is-bold">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <span className="navbar-burger" data-target="navbarMenuHeroB">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroB" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active">Home</a>
                  <a className="navbar-item">Examples</a>
                  <a className="navbar-item">Documentation</a>
                  <span className="navbar-item">
                    <a className="button is-info is-inverted">
                      <span className="icon">
                        <i className="fab fa-github"></i>
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <Link href="/about">
              <figure className="image center is-128x128">
                <Image
                  className="is-rounded center"
                  alt=""
                  src="https://github.com/arianebrandao.png"
                  layout="fill"
                />
              </figure>
            </Link>

            <h1 className="title">titulo</h1>
            <h2 className="subtitle">descricao</h2>
          </div>
        </div>

        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li className="is-active">
                  <a>Menu 1</a>
                </li>
                <li>
                  <a>Menu 2</a>
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
