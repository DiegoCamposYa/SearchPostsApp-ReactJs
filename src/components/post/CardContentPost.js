import React from "react";

import moment from "moment";
import "moment/locale/es";

import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  CardContent,
  Chip,
  Divider,
  CardActions,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    margin: "auto",
    width: "400px",
    height: "300px",
    objectFit: "cover",
    objectPosition: "center center",
  },
  cardContent: {
    textAlign: "center",
  },
  chip: {
    margin: "4px",
  },
  divider: {
    margin: "7px",
  },
}));

const CardContentPost = ({ post }) => {
  const classes = useStyles();
  return (
    <CardContent>
      {post.tags.length > 0
        ? post.tags.map((tag) => (
            <Chip
              key={tag}
              variant="outlined"
              size="small"
              label={`${tag}`}
              className={classes.chip}
            />
          ))
        : null}
      <br />
      <Typography variant="body2" color="textSecondary" component="p">
        {`${post.text}`}
      </Typography>
      {post.link ? (
        <Typography variant="body2" color="error" component="p">
          {`${post.link}`}
        </Typography>
      ) : null}
      <Divider variant="middle" className={classes.divider} />
      <CardActions>
        <FavoriteIcon />
        <Typography variant="body2" color="textSecondary" component="p">
          {`${post.likes} Likes`}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {` ${moment(post.publishDate).format("DD MM YYYY hh:mm:ss")}`}
        </Typography>
      </CardActions>

      <Divider variant="middle" className={classes.divider} />
    </CardContent>
  );
};

export default CardContentPost;
