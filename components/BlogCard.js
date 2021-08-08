import React from 'react';
import cx from 'clsx';
import Link from 'next/link'
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    margin: 'auto',
    boxShadow: 'none',
    borderRadius: 0,
    marginBottom: 20
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

export const BlogCard = React.memo(function NewsCard({ article, category }) {
  const { title, slug, readingTime, thumbnail } = article.fields;
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  return (
    
  <Link href={'/articles/' + article.fields.slug} passHref>
    <a style={{ textDecoration: 'none' }}>
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        classes={mediaStyles}
        image= "/thumbnail.jpg"
      />
      <CardContent className={styles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={`${category}, August 7, 2021`}
          heading={ title }
          body={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.'
          }
        />
        {/* <Button color={'primary'} fullWidth className={styles.cta}><Link href={'/articles/' + slug}><a>Read this<ChevronRightRounded /></a></Link></Button> */}
        {/* <Button color={'primary'} fullWidth className={styles.cta}><Link href={'/articles/' + slug}><a>Read this<ChevronRightRounded/>
        </a></Link></Button> */}
        {/* <Button color={'primary'} fullWidth className={styles.cta}>
          Find Out More <ChevronRightRounded />
        </Button> */}
      </CardContent>
    </Card>
    </a>
  </Link>
  );
});

export default BlogCard