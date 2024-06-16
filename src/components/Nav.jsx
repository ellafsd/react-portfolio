import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Ella Girin
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Button
            component={Link}
            to="/about"
            sx={{
              color: location.pathname === "/about" ? "secondary.main" : "primary.contrastText",
              textDecoration: location.pathname === "/about" ? "underline" : "none",
            }}
          >
            About Me
          </Button>
          <Button
            component={Link}
            to="/portfolio"
            sx={{
              color: location.pathname === "/portfolio" ? "secondary.main" : "primary.contrastText",
              textDecoration: location.pathname === "/portfolio" ? "underline" : "none",
            }}
          >
            Portfolio
          </Button>
          <Button
            component={Link}
            to="/contact"
            sx={{
              color: location.pathname === "/contact" ? "secondary.main" : "primary.contrastText",
              textDecoration: location.pathname === "/contact" ? "underline" : "none",
            }}
          >
            Contact
          </Button>
          <Button
            component={Link}
            to="/resume"
            sx={{
              color: location.pathname === "/resume" ? "secondary.main" : "primary.contrastText",
              textDecoration: location.pathname === "/resume" ? "underline" : "none",
            }}
          >
            Resume
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
