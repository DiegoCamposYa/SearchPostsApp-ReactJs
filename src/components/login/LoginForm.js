import React from "react";

import { useForm } from "../../hooks/useForm";

import { Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const useStyles = makeStyles((theme) => ({
  input: {
    width: "70%",
  },
}));
const LoginForm = ({ handleLoginForm }) => {
  const classes = useStyles();

  const [formValues, handleInputChange, reset] = useForm({
    userName: "",
  });

  const { userName } = formValues;

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    if (userName.trim().length > 0) {
      handleLoginForm(userName);
    }
    reset();
  };
  return (
    <form onSubmit={handleLoginSubmit}>
      <Input
        placeholder="Enter name to continue ..."
        name="userName"
        onChange={handleInputChange}
        value={userName}
        endAdornment={
          <IconButton type="submit" aria-label="search">
            <VpnKeyIcon />
          </IconButton>
        }
        inputProps={{ "aria-label": "description" }}
        className={classes.input}
      />
    </form>
  );
};

export default React.memo(LoginForm);
