import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Grid, Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { addNewPosts } from "../../actions/post";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: "auto",
    maxWidth: "60%",
  },
}));

const ButtonLoadMorePosts = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { posts, numberTotalPost, searchText } = useSelector(
    (state) => state.posts
  );

  const [countPages, setCountPages] = useState(0);

  const handleClickLoadMorePosts = () => {
    console.log(posts.length, numberTotalPost);
    if (Array.isArray(posts)) {
      if (posts.length < numberTotalPost) {
        dispatch(addNewPosts(searchText, countPages + 1));
        setCountPages((prevCountPages) => prevCountPages + 1);
      }
    }
  };

  return (
    <Grid item xs={12} sm={12}>
      {Array.isArray(posts) &&
      parseInt(posts?.length) < parseInt(numberTotalPost) ? (
        <Paper className={classes.paper} elevation={0}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClickLoadMorePosts}
          >
            LOAD MORE POSTS
          </Button>
        </Paper>
      ) : null}
    </Grid>
  );
};

export default ButtonLoadMorePosts;
