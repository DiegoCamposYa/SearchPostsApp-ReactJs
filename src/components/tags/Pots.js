import React, { Suspense } from "react";
// import Post from "./Post";
// import PotsSearchEmpty from "./PotsSearchEmpty";

import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

import LinearProgress from "@material-ui/core/LinearProgress";

const Post = React.lazy(() => import("./Post"));
const PotsSearchEmpty = React.lazy(() => import("./PotsSearchEmpty"));

const Posts = () => {
  const { posts } = useSelector((state) => state.posts);

  return (
    <>
      <React.Suspense fallback={<LinearProgress />}>
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
          </Grid>
        )}
      </React.Suspense>
    </>
  );
};

export default React.memo(Posts);
