import { createTheme } from "@mui/material/styles";
import { purple, red, blue } from "@mui/material/colors";

export const masterTheme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: blue[100],
      dark: "rgb(33, 33, 33)",
      contrastText: "#000",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },

    error: {
      light: "#ff7961",
      main: red[800],
      dark: "#ba000d",
      contrastText: "#000",
    },
    success: {
      light: "#ff7961",
      main: purple[800],
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});
