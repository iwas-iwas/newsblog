import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';


export const socialMedia = {
    linkedin: "https://www.linkedin.com/in/iwas-iwas/",
    facebook: "/",
    github:
      "https://github.com/iwasscience",
    homepage: "/",
  };
  

const useStyles = makeStyles((theme) => ({
  snsIcon: {
    width: "30px",
    height: "30px",

    [theme.breakpoints.down("xs")]: {
      width: "25px",
      height: "25px",
    },
    "&:hover": {
      color: "#add8e6",
    },
  },
}));

const Social = ({ color }) => {
  const classes = useStyles();
  const { linkedin, github } = socialMedia;
  {
  }
  return (
    <Grid item container spacing={2} justify="center" justifyContent="center">
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={linkedin}
      >
        <LinkedInIcon
          className={classes.snsIcon}
          color={color ? "primary" : "secondary"}
        />
      </Grid>
      {/* <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={github}
      >
        <GitHubIcon
          className={classes.snsIcon}
          color={color ? "primary" : "secondary"}
        />
      </Grid> */}
    </Grid>
  );
};

export default Social;