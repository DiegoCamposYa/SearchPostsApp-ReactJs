import React from "react";

import { Paper, CardMedia } from "@material-ui/core";
import undrawAuthentication from "../../images/undrawAuthentication.svg";

const ImageLoginScreen = () => {
  return (
    <Paper elevation={0}>
      <CardMedia
        component="img"
        src={undrawAuthentication}
        title="Paella dish"
        style={{
          width: "60%",
          margin: "auto",
          objectFit: "cover",
        }}
      />
    </Paper>
  );
};

export default React.memo(ImageLoginScreen);
