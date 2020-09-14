import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  AppBar,
  IconButton,
  Typography,
  Toolbar,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { starLogout } from "../../actions/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const { userName } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleClicLogout = () => {
    dispatch(starLogout());
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <LocalOfferIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            React PostApp
          </Typography>

          <MenuItem>
            <Typography variant="h6" className={classes.title}>
              {!userName ? "" : userName}
            </Typography>
          </MenuItem>
          {!userName ? null : (
            <MenuItem>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleClicLogout}
              >
                <ExitToAppIcon />
              </IconButton>
            </MenuItem>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
