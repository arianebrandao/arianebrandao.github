import { GetStaticProps } from 'next';
import Link from 'next/link'
import Head from 'next/head';
import { api } from '../services/api';
import { Header } from '../components/Header';
//import { Button } from '@douyinfe/semi-ui';

//import styles from '../styles/home.module.scss';

type Article = {
  id: string;
  title: string;
  slug: string;
  category: {
    name: string;
  },
}

type Page = {
  pageName: string;
  slug: string;
  hero?: {
    heading?: string;
    description?: string;
  };
  body?: {
    id: number;
    heading?: string;
    text?: string;
  };
}

interface HomeProps {
  articles: Article[];
  page: Page;
}

export default function Home({articles, page}: HomeProps) {

  console.log(page)

  return (
    <>
      <Head>
        <title>{page.pageName} | Ariane Brandão</title>
      </Head>

      <main>
        <Header />
        <nav>nav</nav>
        <section>
          <h1>{page.body[0].heading}</h1>

          <ul>
            {articles.map(article => (
              <li key={article.id}>
                <Link href={`/blog/${article.slug}`}>
                  <a>[{article.category.name}] - {article.title}</a>
                </Link>
              </li>
            )
            )}
          </ul>
        </section>
        <footer>footer</footer>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const postsResponse = await api.get('/articles?_limit=2')
  const pageResponse = await api.get('/pages/1')

  const page = pageResponse.data

  const articles = postsResponse.data.map(article => {
    return {
      id: article.id,
      title: article.title,
      slug: article.slug,
      category: article.category,
    }
  })

  return {
    props: {
      articles,
      page,
    },
    revalidate: 1 * 1 * 1, // 30m = second * minute * hour
  }
};
