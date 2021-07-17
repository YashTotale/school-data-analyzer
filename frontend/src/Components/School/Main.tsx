// React Imports
import React, { FC, useEffect, useState } from "react";
import { getSchool } from "../../Utils/api";
import { School } from "../../Utils/types";

// Material UI Imports
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  school: {},
}));

interface MainProps {
  id: string;
}

/**
 * Display information for a single school
 */
const Main: FC<MainProps> = (props) => {
  const classes = useStyles();
  const [school, setSchool] = useState<School | null>(null);

  useEffect(() => {
    const fetchedSchool = getSchool(props.id);
    setSchool(fetchedSchool);
  }, [props.id]);

  return <div className={classes.school}>{JSON.stringify(school)}</div>;
};

export default Main;
