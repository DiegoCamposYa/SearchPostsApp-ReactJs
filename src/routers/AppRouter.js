import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import LoginScreen from "../components/login/LoginScreen";
import PublicRoute from "./PublicRouter";
import HomeRoutes from "./HomeRoutes";
import PrivateRoute from "./PrivateRoute";
import useLocalStorage from "../hooks/useLocalStorage";

import { authLogin } from "../actions/auth";

const AppRouter = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [user, setUser] = useLocalStorage("user", "");

  useEffect(() => {
    if (user) {
      dispatch(authLogin(user.userName));
    }
  }, [user]);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={isAuthenticated}
          />

          <PrivateRoute
            path="/"
            component={HomeRoutes}
            isAuthenticated={isAuthenticated}
          />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
