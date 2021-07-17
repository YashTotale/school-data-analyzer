// React Imports
import React, { FC } from "react";

// Material UI Imports
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  home: {},
}));

const Home: FC = () => {
  const classes = useStyles();

  return <div className={classes.home}>School Data</div>;
};

export default Home;
