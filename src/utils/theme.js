import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#008080", 
      contrastText: "#ffffff", 
    },
    secondary: {
      main: "#00FFFF", 
      contrastText: "#000000", 
    },
    text: {
      primary: "#ffffff", 
      secondary: "#cccccc", 
    },
    background: {
      default: "#242424", 
      paper: "#1f1f1f", 
      secondary: "#343a40", 
    },
    error: {
      main: "#f44336", 
      contrastText: "#ffffff", 
    },
    warning: {
      main: "#ffa726", 
      contrastText: "#000000", 
    },
    info: {
      main: "#29b6f6", 
      contrastText: "#ffffff", 
    },
    success: {
      main: "#66bb6a", 
      contrastText: "#ffffff", 
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`,
    h1: {
      fontSize: "2.5rem", 
      color: "#ffffff",
      fontWeight: 700, 
    },
    h2: {
      fontSize: "2rem", 
      color: "#ffffff",
      fontWeight: 600, 
    },
    h3: {
      fontSize: "1.75rem", 
      color: "#ffffff",
      fontWeight: 500, 
    },
    body1: {
      fontSize: "1rem", 
      color: "#cccccc",
      lineHeight: 1.5, 
    },
    body2: {
      fontSize: "0.875rem",
      color: "#aaaaaa",
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 600, 
      textTransform: "none", 
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", 
          padding: "10px 20px", 
          textTransform: "none", 
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: "20px", 
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#1f1f1f", 
          padding: "20px", 
          borderRadius: "8px", 
        },
      },
    },
  },
});

export default theme;
