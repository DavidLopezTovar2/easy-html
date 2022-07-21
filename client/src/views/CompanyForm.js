import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { createCompany } from "../services/company.service";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import Container from "react-bootstrap/Container";

const CompanyForm = () => {
  const navigate = useNavigate();

  const [company] = useState({
    title: "",
    descriptioncompany: "",
    slogan: "",
    imgcompany: "",
    nameurlcompany: "",
    foter: {
      address: "",
      phone: "",
      instagram: "",
      whatsapp: "",
      facebook: "",
    },
    colorpage: "",
  });

  const formSchema = Yup.object().shape({
    title: Yup.string()
      .required("Este campo es requerido")
      .min(10, "Debe tener por lo menos 10 caracteres"),
    descriptioncompany: Yup.string()
      .min(100, "Debe tener por lo menos 100 caracteres")
      .required("Este campo es requerido"),
    slogan: Yup.string()
      .required("Este campo es requerido")
      .min(30, "Debe tener por lo menos 30 caracteres"),
    imgcompany: Yup.string().required("Este campo es requerido"),
    nameurlcompany: Yup.string()
      .required("Este campo es requerido")
      .min(10, "Debe tener por lo menos 10 caracteres"),
    address: Yup.string()
      .required("Este campo es requerido"),
    phone: Yup.string()
      .required("Este campo es requerido"),
    instagram: Yup.string()
      .required("Este campo es requerido"),
    whatsapp: Yup.string()
      .required("Este campo es requerido"),
    facebook: Yup.string()
      .required("Este campo es requerido"),
  });

  const handlerSubmit = async (values) => {
    try {
      await createCompany(values);
      Swal.fire({
        title: "¡Felicidades!",
        text: "Tu página ha sido creado. Vamos a configurar tus productos",
        icon: "success",
        confirmButtonColor: "#0275d8",
      });
      //TODO navigate("/");
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "Ups!",
        text: "No se ha podido crear tu página",
        icon: "error",
        confirmButtonColor: "#0275d8",
      });
    }
  };

  return (
    <>
      <Header props="loggedin" />
      <Container>
        <Button></Button>
        <Formik
          submitForm
          initialValues={company}
          validationSchema={formSchema}
          onSubmit={(values) => {
            handlerSubmit(values);
          }}
        >
          {({ errors, getFieldProps }) => (
            <FormikForm>
              <Container>
                <div>
                  <Form.Group controlId="formName">
                    <Form.Label>Nombre de la empresa</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nombre"
                      value={company.title}
                      {...getFieldProps("title")}
                    />
                  </Form.Group>
                  {errors.title && (
                    <div className="d-flex text-danger error-form">
                      <p>{errors?.title}</p>
                    </div>
                  )}
                </div>
                <div >
                  <Form.Group controlId="formEmail">
                    <Form.Label>Descripción de la compañia</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Descripción"
                      value={company.descriptioncompany}
                      {...getFieldProps("descriptioncompany")}
                    />
                  </Form.Group>
                  {errors.descriptioncompany && (
                    <div className="d-flex text-danger error-form">
                      <p>{errors?.descriptioncompany}</p>
                    </div>
                  )}
                </div>
                <div>
                  <Form.Group controlId="formPassword">
                    <Form.Label>Slogan</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Slogan"
                      value={company.slogan}
                      {...getFieldProps("slogan")}
                    />
                  </Form.Group>
                  {errors.slogan && (
                    <div className="d-flex text-danger error-form">
                      <p>{errors?.slogan}</p>
                    </div>
                  )}
                </div>
                <div>
                  <Form.Group controlId="formConfirmPassword">
                    <Form.Label>Imagen de la empresa</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Imagen"
                      value={company.imgcompany}
                      {...getFieldProps("imgcompany")}
                    />
                  </Form.Group>
                  {errors.imgcompany && (
                    <div className="d-flex text-danger error-form">
                      <p>{errors?.imgcompany}</p>
                    </div>
                  )}
                </div>
                <Button className="mt-3" variant="primary" type="submit">
                  Crear Página
                </Button>
              </Container>
            </FormikForm>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default CompanyForm;
