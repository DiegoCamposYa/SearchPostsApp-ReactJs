import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import useLocalStorage from "../hooks/useLocalStorage";

import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import LoginScreen from "../components/login/LoginScreen";
import PublicRoute from "./PublicRouter";
import HomeRoutes from "./HomeRoutes";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  const { userName, isAuthenticated } = useSelector((state) => state.auth);

  const [user, setUser] = useLocalStorage("user", "");

  useEffect(() => {
    setUser({ userName, isAuthenticated });
  }, [userName, isAuthenticated]);
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
