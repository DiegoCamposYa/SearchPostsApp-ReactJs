import React from "react";

import CardContentPost from "./CardContentPost";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, CardMedia, Paper, Divider } from "@material-ui/core";
import CardHeaderPost from "./CardHeaderPost";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    overflow: "hidden",
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
  return (
    <>
      <Grid item xs={11} md={3}>
        <Paper className={classes.paper}>
          <CardHeaderPost owner={owner} />
          <Divider variant="middle" className={classes.divider} />
          <CardMedia className={classes.cardMedia} image={post.image} />
          <CardContentPost post={post} />
        </Paper>
      </Grid>
    </>
  );
};

export default Post;
