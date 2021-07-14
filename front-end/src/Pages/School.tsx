// React Imports
import React, { FC } from "react";
import { useParams } from "react-router-dom";
import Main from "../Components/School/Main";

// Material UI Imports
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {},
}));

interface Params {
  id: string;
}

const School: FC = () => {
  const classes = useStyles();
  const { id } = useParams<Params>();

  return (
    <div className={classes.container}>
      <Main id={id} />
    </div>
  );
};

export default School;
