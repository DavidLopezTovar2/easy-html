import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import  milogo  from '../imagesrrss/logo.png';
import { actualUser, logout } from "../services/user.service";
import Cookies from "js-cookie";
import Box from "@mui/material/Box";

const Header = ({ props }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    loadUser();
  }, [props]);

  const loadUser = async () => {
    try {
      const userFromService = await actualUser();
      setUser(userFromService.data.userId);
    } catch (err) {
      console.log(err);
    }
  };

  const logoutFromService = async () => {
    try {
      await logout();
      Cookies.remove("usertoken");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} >

        <Nav sx={{ flexGrow: 1 }} className="d-flex" activeKey="/home">
          <Nav.Item >
            
            <Nav.Link className="no-style" href={props ? `/mi/${user}` : "/"}>
              <Typography
                variant="h6"
                color="inherit"
                display="flex"
                noWrap                
              >
                <img id ="milogo" src={milogo} alt="" />
              </Typography>
              
            </Nav.Link>
            
          </Nav.Item>
        </Nav>
        </Box>
        {props ? (
          <Button
            onClick={() => logoutFromService()}
            variant="contained"
            color="error"
          >
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
