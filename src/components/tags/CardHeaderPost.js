import React from "react";
import { CardHeader, Avatar } from "@material-ui/core";

const CardHeaderPost = ({ owner }) => {
  return (
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" src={`${owner.picture}`}>
          R
        </Avatar>
      }
      title={`${owner.firstName}`}
      subheader={`${owner.email}`}
    />
  );
};

export default CardHeaderPost;
