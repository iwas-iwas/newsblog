import React from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1, 
    color:"#000000"
    // textDecoration: 'none',
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    // textDecoration: 'none',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    textDecoration: 'none'
  },
}));


const sections = [
  { title: 'Category 1', url: '/categories/one' },
  { title: 'Category 2', url: '/categories/two' },
  { title: 'Category 3', url: '/categories/three' },
  { title: 'Category 4', url: '/categories/four' },
  { title: 'Category 5', url: '/categories/five' },
  { title: 'Category 6', url: '/categories/six' },
];

export default function Header() {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button href="/about" size="small">About</Button>
        <Typography
          component="h2"
          variant="h5"
          // color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
        <Link href="/" style={{ textDecoration: 'none', color:"#000000"}}>
          Iwas Blog
        </Link>
        </Typography>
        {/* <IconButton>
          <SearchIcon />
        </IconButton> */}
        {/* <Button href="/" variant="outlined" size="small" >Newsletter</Button> */}
        <Button href="/" size="small">Newsletter</Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="primary"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

