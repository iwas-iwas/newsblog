import { createClient } from "contentful"
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types'
import Skeleton from "../../components/Skeleton";
import Container from '@material-ui/core/Container'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

const dtrOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <img
        src={node.data?.target?.fields?.file?.url}
        alt={node.data?.target?.fields?.title}
      />
    ),
  },
};

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'article'
  })

  // create array with each path identifier (slug)
  const paths = res.items.map(item => {
    return { 
      params: {slug: item.fields.slug }
    }
  })

  return {
    paths: paths,
    fallback: true // show fallback skeleton page instad of 404 if article is not available or loading 
  }
}

export async function getStaticProps({ params }) {

  const { items } = await client.getEntries({
    content_type: 'article',
    'fields.slug': params.slug
  })

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: { article: items[0] },
    revalidate: 864000
  }

}

export default function ArticleDetails({ article }) {
  if (!article) return <Skeleton />
  
  const { featuredImage, title, readingTime, ingidients, body } = article.fields;

  return (
    <Container>
      <div className="banner">
        <Image 
        src={'https:' + featuredImage.fields.file.url}
        width={featuredImage.fields.file.details.image.width}
        height={featuredImage.fields.file.details.image.height}
        />
        <h2>{ title }</h2>
      </div>
      <div className="info">
        <p>Takes about { readingTime } mins to read.</p>
        <h3>Tags: </h3>
        {ingidients.map(ing => (
          <span key={ing}>{ ing }   </span>
        ))}
      </div>
      <div className="method">
        <h3>Body: </h3>
        <div>{ documentToReactComponents(body, dtrOptions) }</div>
      </div>
    </Container>
  )
}