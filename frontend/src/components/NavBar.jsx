import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";
import { postLogout } from "../service/auth";
import { useAuth } from "../hooks/useAuth";

export const NavBar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    postLogout();
    navigate("/login");
  };

  const auth = useAuth();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/create-capsules" style={{textDecoration: "none"}}>
            <Button color ="inherit">Create Capsule</Button>
          </Link>
          <Link to="/capsules" style={{ textDecoration: "none", flexGrow:1}}>
            <Button color="inherit">Your Capsules</Button>
          </Link>

          {auth.currentUser ? (
            <Button color="inherit" onClick={handleLogOut}>
              Log out
            </Button>
          ) : (
            <>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Button color="inherit">Sign up</Button>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button color="inherit">Log in</Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

