import { GetStaticProps } from "next";
import Image from 'next/image'
import { api } from "../../services/api";

export function Header() {
  return (
    <header>
      <Image src="https://github.com/arianebrandao.png" alt="My profile photo" width={100} height={100} />

      <h1>nome</h1>
      <p>description</p>

      Social links
    </header>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const postsResponse = await api.get('/articles?_limit=2')

  //console.log(postsResponse)

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
      articles
    },
    revalidate: 1 * 1 * 1, // 30m = second * minute * hour
  }
};
