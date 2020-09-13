import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: "30px",
    overflow: "hidden",
    textAlign: "center",
  },
}));

const ButtonLoadPost = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={12}>
      <Paper className={classes.paper} elevation={0}>
        <Button size="large" className={classes.margin}>
          Load more post
        </Button>
      </Paper>
    </Grid>
  );
};

export default ButtonLoadPost;
