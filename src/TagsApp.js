import React from "react";

import { Provider } from "react-redux";
import { store } from "./store/store";
import "./index.css";
import LinearProgress from "@material-ui/core/LinearProgress";

const AppRouter = React.lazy(() => import("./routers/AppRouter"));

const TagsApp = () => {
  return (
    <Provider store={store}>
      <React.Suspense fallback={<LinearProgress />}>
        <AppRouter />
      </React.Suspense>
    </Provider>
  );
};

export default TagsApp;
