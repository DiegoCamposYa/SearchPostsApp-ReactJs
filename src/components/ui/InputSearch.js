import React from "react";

import { useForm } from "../../hooks/useForm";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { Input } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: "auto",
    maxWidth: "60%",
  },
}));

const InputSearch = ({ handleSearchText }) => {
  const classes = useStyles();

  const [formValues, handleInputChange, reset] = useForm({
    searchText: "",
  });

  const { searchText } = formValues;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (searchText.trim().length > 0) {
      handleSearchText(searchText);
    }
    reset();
  };

  return (
    <>
      <Grid item xs={12} sm={11}>
        <Paper className={classes.paper} elevation={3}>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Type Here to search tags ..."
              name="searchText"
              onChange={handleInputChange}
              value={searchText}
              endAdornment={
                <IconButton type="submit" aria-label="search">
                  <SearchIcon />
                </IconButton>
              }
              inputProps={{ "aria-label": "description" }}
              style={{
                width: "80%",
              }}
            />
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default React.memo(InputSearch);
