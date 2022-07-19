import React from "react";
import Header from "../components/Header";
import UserForm from "../components/UserForm";
import Typography from "@mui/material/Typography";
import Container from "react-bootstrap/esm/Container";

const Register = () => {
  return (
    <>
      <Header />
      <Container>
        <Typography
          component="h1"
          variant="h2"
          align="justify"
          color="text.primary"
          gutterBottom
          className="mt-4"
        >
          Registro
        </Typography>
        <UserForm />
      </Container>
    </>
  );
};

export default Register;
