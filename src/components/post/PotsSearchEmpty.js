import React from "react";

import undrawNoData from "../../images/undrawNoData.svg";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: "auto",
    maxWidth: "60%",
  },
}));

const PotsSearchEmpty = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={0}
      justify="center"
      alignItems="center"
      style={{
        textAlign: "center",
      }}
    >
      <Grid
        item
        xs={12}
        sm={11}
        style={{
          paddingTop: "20px",
        }}
      >
        <Paper className={classes.paper} elevation={0}>
          <CardMedia
            component="img"
            src={undrawNoData}
            title="Paella dish"
            style={{
              width: "60%",
              margin: "auto",
              objectFit: "cover",
            }}
          />
          <Typography variant="h5">your search is empty</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PotsSearchEmpty;
