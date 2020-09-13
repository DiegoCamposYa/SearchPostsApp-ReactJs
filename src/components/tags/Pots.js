import React from "react";
import Post from "./Post";
import PotsSearchEmpty from "./PotsSearchEmpty";
import ButtonLoadPost from "../reusables/ButtonLoadPost";

import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

const Posts = () => {
  const { posts } = useSelector((state) => state.posts);

  return (
    <>
      {!Array.isArray(posts) || posts.length === 0 ? (
        <PotsSearchEmpty />
      ) : (
        <Grid
          container
          spacing={0}
          justify="center"
          alignItems="center"
          style={{
            paddingTop: "50px",
          }}
        >
          <Grid container item xs={11} spacing={3}>
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <ButtonLoadPost />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Posts;
