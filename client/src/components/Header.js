import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const Header = ({ props }) => {

  const logout = () => {
    // TODO: service to loggout
  }
  
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Easy_HTML
        </Typography>
        {props ? (
          <Button onClick={() => logout()} variant="contained" color="error">
            Logout
          </Button>
        ) : (
          <></>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
