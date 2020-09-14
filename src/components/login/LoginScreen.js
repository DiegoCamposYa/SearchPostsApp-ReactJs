import React from "react";

import LoginForm from "./LoginForm";

import NavBar from "../ui/NavBar";
import ImageLoginScreen from "./ImageLoginScreen";

import { authLogin } from "../../actions/auth";

import { useDispatch } from "react-redux";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useLocalStorage from "../../hooks/useLocalStorage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    paddingTop: "50px",
  },
}));

const LoginScreen = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [user, setUser] = useLocalStorage("user", "");
  const handleLoginForm = (userName) => {
    dispatch(authLogin(userName));

    setUser({ userName, isAuthenticated: true });
  };

  return (
    <>
      <NavBar />
      <div className={classes.root}>
        <Grid
          container
          spacing={0}
          direction="column"
          justify="center"
          alignItems="stretch"
          alignContent="center"
          style={{
            textAlign: "center",
            paddingTop: "50px",
          }}
        >
          <Grid item xs={10}>
            <Typography variant="h4">Login to search Pots</Typography>
          </Grid>
          <br />
          <Grid item xs={10}>
            <ImageLoginScreen />
          </Grid>
          <Grid item xs={12} sm={11} className={classes.grid}>
            <LoginForm handleLoginForm={handleLoginForm} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default LoginScreen;
