import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, CardMedia, Paper, Divider } from "@material-ui/core";
import CardHeaderPost from "./CardHeaderPost";
import Grow from "@material-ui/core/Grow";
import CardContentPost from "./CardContentPost";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    transition: "1s",
    overflow: "hidden",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  cardMedia: {
    margin: "auto",
    width: "400px",
    height: "300px",
    objectFit: "cover",
    objectPosition: "center center",
  },
  divider: {
    margin: "7px",
  },
}));

const Post = ({ post }) => {
  const { owner } = post;
  const classes = useStyles();

  const checked = true;
  return (
    <>
      <Grow
        in={checked}
        style={{ transformOrigin: "0 0 0" }}
        {...(checked ? { timeout: 1000 } : {})}
      >
        <Grid item xs={11} md={3}>
          <Paper className={classes.paper} elevation={3}>
            <CardHeaderPost owner={owner} />
            <Divider variant="middle" className={classes.divider} />
            <CardMedia className={classes.cardMedia} image={post.image} />
            <CardContentPost post={post} />
          </Paper>
        </Grid>
      </Grow>
    </>
  );
};

export default Post;
