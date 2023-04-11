import { createTheme } from "@mui/material/styles";
import { purple, red, blue } from "@mui/material/colors";

export const masterTheme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#333",
      dark: "rgb(33, 33, 33)",
      contrastText: "#fff",
    },
    secondary: {
      light: "#00adb5",
      main: "#f5f5f5",
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
