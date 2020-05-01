import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import "@openfonts/open-sans_latin"

const openSans = {
  fontFamily: "Open Sans, serif",
  fontStyle: "normal",
  fontWeight: "400",
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFD77F",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFB000",
      contrastText: "#3d4451",
    },
    text: {
      primary: "#000000",
      secondary: "#3d4451",
    },
    background: {
      default: "#FFFFFF",
    },
    success: {
      main: "A5FA39",
    },
  },
  typography: {
    fontFamily: "PT Sans",
    fontSize: 16,
    h1: {
      fontSize: "3.5rem",
      lineHeight: "1.2",
      fontWeight: "bold",
      color: "#3d4451",
      margin: "10px 0 30px",
    },
    h2: {
      fontSize: "2rem",
      lineHeight: "1.2",
      fontWeight: "bold",
      color: "#3d4451",
      margin: "20px 0 20px",
    },
    h3: {
      fontSize: "1.8rem",
      lineHeight: "1.2",
      fontWeight: "bold",
      color: "#3d4451",
      margin: "10px 0 20px",
    },
    body1: {
      fontSize: "1.25rem",
      lineHeight: "1.6",
      color: "#000000",
    },
    body2: {
      fontSize: "1rem",
      lineHeight: "1.4",
      color: "rgb(61, 68, 81)",
    },
    button: {
      fontSize: "1rem",
      lineHeight: "1.4",
      color: "rgb(61, 68, 81)",
    },
    caption: {
      fontSize: ".8rem",
      lineHeight: "1",
      color: "rgb(61, 68, 81)",
    },
  },
  spacing: factor => `${0.25 * factor}rem`, // (Bootstrap strategy)
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [openSans],
      },
    },
    MuiInput: {
      underline: {
        "&&&&:hover:before": {
          borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
        },
      },
    },
  },
})
export default responsiveFontSizes(theme)
