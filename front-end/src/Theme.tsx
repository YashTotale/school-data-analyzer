//React Imports
import React, { FC } from "react";

//Material UI Imports
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { amber, lightBlue } from "@material-ui/core/colors";

const Theme: FC = ({ children }) => {
  const theme = createMuiTheme({
    palette: {
      primary: lightBlue,
      secondary: amber,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
