import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomeScreen from "../components/home/HomeScreen";

const HomeRoutes = () => {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/home" component={HomeScreen} />

          <Redirect to="/home" />
        </Switch>
      </div>
    </>
  );
};

export default HomeRoutes;
