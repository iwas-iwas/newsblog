import { createClient } from "contentful"
import BlogCard from "../../components/BlogCard"
import Masonry from 'react-masonry-css'
import Container from '@material-ui/core/Container'
import Skeleton from "../../components/Skeleton";


export const getStaticPaths = async () => {

  // each object represents a route that next js will build 
  const category_ids = ["one", "two", "three", "four", "five", "six"]

  // create array with each route as [{params: {category: one}}, {params: {category: two}}, .., {params: {category: six}}]
  const paths = category_ids.map(category_id => {
    return { 
      params: {category: category_id }
    }
  })

  return {
    paths: paths,
    fallback: true // show fallback skeleton page instad of 404 if article is not available or loading (if set to false, it would show 404)
  }
}

// get data for each individual category to use it in the following category component
// getStaticProps runs n times, where n is the number of elements in the paths array (number of routes next js generates for the categories)
export async function getStaticProps(context) {

  const category = context.params.category;

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'article' })

  // filter articles from the current category context 
  var data = res.items;
  data = data.filter( i => category == i.fields.category );

  return {
    props: 
    
    { articles: data },
    revalidate: 864000
  }

}

export default function CategoryPage({ articles }) {
  if (!articles) return <Skeleton />

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
    return <BlogCard key={article.sys.id} article={article} category={article.fields.category} />
      })} 
    </Masonry>
  </Container>
  )
}