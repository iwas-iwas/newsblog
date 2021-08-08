import Link from "./Link";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import Social from "./Social";

// export const socialMedia = {
//   instagram: "https://www.google.com/",
//   github:
//     "https://www.google.com/",
// };

export const routes = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    // background: "linear-gradient(45deg, #9013FE 15%, #50E3C2 90%)",
    // minWidth: "100%",
    // minHeight: "100vh",
    // display: "flex",
    // flexDirection: "row",
    justifyContent: "center"
  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: `100%`,
    position: "relative",
    overflow: "hidden",
    marginTop: "6em",
    padding: "2em 0 ",
    
  },
  link: {
    fontSize: "1.25em",
    color: "#fff",
    "&:hover": {
      color: "#add8e6",
    },
  },
  copylight: {
    color: "#fff",
    fontSize: "1em",
    "&:hover": {
      color: "#add8e6",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  const path = routes;
  const router = useRouter();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid className={classes.root} container spacing={3}>
          {path.map(({ name, link }) => (
            <Grid item key={link} >
              <Link href={link}>
                <Typography
                  className={classes.link}
                  style={{
                    fontWeight: router.pathname === link && "bold",
                  }}
                >
                  {name}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid className={classes.root} container style={{ margin: "1.2em 0" }} justify="center">
          <Social/>
        </Grid>
        <Grid
          className={classes.root}
          item
          container
          component={"a"}
          target="_blank"
          rel="noreferrer noopener"
          href="/"
          justify="center"
          style={{
            textDecoration: "none",
          }}
        >
          <Typography className={classes.copylight}>
            &copy; 2021, Iwas Iwas
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;