import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#008080', // Teal for primary color
      contrastText: '#ffffff', // White text on primary color
    },
    secondary: {
      main: '#00FFFF', // Cyan for secondary color
      contrastText: '#000000', // Black text on secondary color
    },
    text: {
      primary: '#ffffff', // White for primary text color
      secondary: '#cccccc', // Light gray for secondary text color
    },
    background: {
      default: '#242424', // Dark gray background
      paper: '#1f1f1f', // Slightly lighter for paper elements
      secondary: '#343a40', // Darker shade for secondary backgrounds
    },
    error: {
      main: '#f44336', // Red for errors
      contrastText: '#ffffff', // White text on error
    },
    warning: {
      main: '#ffa726', // Orange for warnings
      contrastText: '#000000', // Black text on warning
    },
    info: {
      main: '#29b6f6', // Light blue for info
      contrastText: '#ffffff', // White text on info
    },
    success: {
      main: '#66bb6a', // Green for success
      contrastText: '#ffffff', // White text on success
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`,
    h1: {
      fontSize: '2.5rem', // Larger for h1
      color: '#ffffff',
      fontWeight: 700, // Bold text
    },
    h2: {
      fontSize: '2rem', // Size for h2
      color: '#ffffff',
      fontWeight: 600, // Semi-bold text
    },
    h3: {
      fontSize: '1.75rem', // Size for h3
      color: '#ffffff',
      fontWeight: 500, // Medium text
    },
    body1: {
      fontSize: '1rem', // Standard body text
      color: '#cccccc',
      lineHeight: 1.5, // Line height for readability
    },
    body2: {
      fontSize: '0.875rem', // Smaller body text
      color: '#aaaaaa',
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 600, // Semi-bold for buttons
      textTransform: 'none', // Capitalization for button text
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Rounded corners for buttons
          padding: '10px 20px', // Padding for buttons
          textTransform: 'none', // Capitalization for button text
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '20px', // Padding for containers
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1f1f1f', // Darker background for papers
          padding: '20px', // Padding for paper elements
          borderRadius: '8px', // Rounded corners for paper elements
        },
      },
    },
  },
});

export default theme;
