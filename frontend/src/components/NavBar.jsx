import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";

export const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" style={{ textDecoration: "none", flexGrow: 1 }}>
          <Button color="inherit">Home</Button>
        </Link>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Button color="inherit">Sign up</Button>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button color="inherit">Log in</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
