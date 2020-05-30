import { createMuiTheme } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";
import purple from "@material-ui/core/colors/purple";
import red from "@material-ui/core/colors/red";
import orange from "@material-ui/core/colors/orange";

export const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: purple,
  },
  status: {
    error: red,
    danger: orange,
  },
});

export default theme;
