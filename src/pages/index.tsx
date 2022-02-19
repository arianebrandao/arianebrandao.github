import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import { api } from "../services/api";
import Header from "../components/Header";

type Article = {
  id: string;
  attributes: {
    title: string;
    description: string;
    content: string;
    slug: string;
  };
};

type Page = {
  id: string;
  attributes: {
    pageName: string;
    slug: string;
  }
};

interface HomeProps {
  articles: Article[];
  page: Page;
}

export default function Home({ articles, page }: HomeProps) {
  return (
    <>
      <Head>
        <title>{page.attributes.pageName} | Ariane Brandão</title>
      </Head>

      <main>
        <Header />
        <nav>nav</nav>

        <section>
          {/* <h1>{page.body[0].heading}</h1> */}

          <ul>
            {articles.map((article) => (
              <li key={article.id}>
                <Link href={`/blog/${article.attributes.slug}`}>
                  <a>
                    [categoria] - {article.attributes.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <footer>footer</footer>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postsResponse = await api.get("/articles"); //articles?_limit=2
  const pageResponse = await api.get("/pages/1");

  const page = pageResponse.data.data;

  const articles = postsResponse.data.data.map((article) => article);

  return {
    props: {
      articles,
      page,
    },
    revalidate: 1 * 1 * 1, // 30m = second * minute * hour
  };
};
