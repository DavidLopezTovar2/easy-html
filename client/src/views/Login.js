import React, { useState } from "react";
import Header from "../components/Header";
import Typography from "@mui/material/Typography";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik, Form as FormikForm } from "formik";
import { login } from "../services/user.service";

const Login = () => {
  const navigate = useNavigate();

  const [user] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(false);

  const handlerSubmit = async (values) => {
    setLoginError(false);
    try {
      await login(values);
      navigate("/mi");
    } catch (err) {
        setLoginError(true)
    }
  };

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
          Login
        </Typography>
        <Formik
          submitForm
          initialValues={user}
          onSubmit={(values) => {
            handlerSubmit(values);
          }}
        >
          {({ errors, getFieldProps }) => (
            <FormikForm>
              <Container>
                <div className="mt-3">
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      value={user.email}
                      {...getFieldProps("email")}
                    />
                  </Form.Group>
                </div>
                <div className="mt-3">
                  <Form.Group controlId="formPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Contraseña"
                      value={user.password}
                      {...getFieldProps("password")}
                    />
                  </Form.Group>
                </div>
                <div className="d-flex text-danger error-form">
                  <p>{loginError && 'Ops, credenciales invalidas'}</p>
                </div>
                <Button className="mt-3" variant="primary" type="submit">
                  Login
                </Button>
              </Container>
            </FormikForm>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default Login;
