import { createClient } from "contentful"
import BlogCard from "../components/BlogCard"
import Masonry from 'react-masonry-css'
import Container from '@material-ui/core/Container'


export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'article' })

  return {
    props: 
    
    { articles: res.items },
    revalidate: 864000
  }

}

export default function Siy({ articles }) {

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  };
  
  return (
    <Container>
      <Masonry
       breakpointCols={breakpoints}
       className="my-masonry-grid"
       columnClassName="my-masonry-grid_column">
      { articles.map(article => {
    return article.fields.category === "six" &&
    <BlogCard key={article.sys.id} article={article} category={"Category 6"} />
      // : <p key={article.sys.id}>{null}</p>
      })} 
    </Masonry>
  </Container>
  )
}
