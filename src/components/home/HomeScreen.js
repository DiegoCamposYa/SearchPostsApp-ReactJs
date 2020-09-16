import React from "react";

import NavBar from "../ui/NavBar";
import InputSearch from "../ui/InputSearch";
import Posts from "../post/Posts";

import { postsByTag } from "../../actions/post";
import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import ScrollTop from "../reusables/ScrollTop";
import ButtonLoadMorePosts from "../ui/ButtonLoadMorePots";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const HomeScreen = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSearchText = (data) => {
    dispatch(postsByTag(data));
  };

  return (
    <>
      <NavBar />
      <div className={classes.root}>
        <Grid
          container
          spacing={0}
          justify="center"
          alignItems="center"
          style={{
            textAlign: "center",
            paddingTop: "50px",
          }}
        >
          <InputSearch handleSearchText={handleSearchText} />
        </Grid>
      </div>
      <Posts />
      <ScrollTop showBelow={250} />
      <ButtonLoadMorePosts />
    </>
  );
};

export default React.memo(HomeScreen);
