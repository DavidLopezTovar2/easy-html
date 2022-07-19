import { Typography } from "@mui/material";
import React from "react";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";

const Mi = () => {
  return (
    <>
      <Header props='loggedin' />
      <Container>
        <Typography
          component="h1"
          variant="h2"
          align="justify"
          color="text.primary"
          gutterBottom
          className="mt-4"
        >
          Mi perfil
        </Typography>
      </Container>
    </>
  );
};

export default Mi;
