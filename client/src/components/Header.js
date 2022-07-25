import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { logout } from "../services/user.service";
import Cookies from 'js-cookie'
import  milogo  from '../imagesrrss/logo.png';

const Header = ({ props }) => {


  const navigate = useNavigate();

  const logoutFromService = async() => {
    try{
      await logout();
      Cookies.remove('usertoken');
      navigate('/')
    }catch(err){
      console.log(err);
    }
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <Nav sx={{ flexGrow: 1 }} className="d-flex justify-content-center" activeKey="/home">
          <Nav.Item >
            
            <Nav.Link className="no-style" href={props ? "/mi" : "/"}>
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
        {props ? (
          <Button onClick={() => logoutFromService()} variant="contained" color="error">
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
