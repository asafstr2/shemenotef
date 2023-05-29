import { createTheme } from "@mui/material/styles";
import { purple, red, blue } from "@mui/material/colors";

export const masterTheme = createTheme({
  palette: {
    primary: {
      light: "#00adb5",
      main: "#232f3e",
      dark: "rgb(33, 33, 33)",
      contrastText: "#fff",
    },
    secondary: {
      light: "white",
      main: "#fff",
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
