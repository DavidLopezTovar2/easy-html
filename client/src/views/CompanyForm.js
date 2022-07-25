import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { createCompany, editCompany, getOneCompany } from "../services/company.service";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import Container from "react-bootstrap/Container";
import imageBase from "../assets/image.png";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Typography } from "@mui/material";
import { addCompanyToUser } from "../services/user.service";

const CompanyForm = () => {
  const navigate = useNavigate();
  const theme = createTheme();
  const { id } = useParams();

  const [company, setCompany] = useState({
    title: "",
    descriptioncompany: "",
    slogan: "",
    imgcompany: "",
    nameurlcompany: "",
    footer: {
      address: "",
      phone: "",
      instagram: "",
      whatsapp: "",
      facebook: "",
    },
    colorpage: "",
  });

  useEffect(() => {
    startForm();
  }, [id]);

  useEffect(() => {
    console.log('useEffect',company)
  }, [company]);

  const startForm = async () => {
    try {
      const companyFromService = await getOneCompany(id);
      setCompany(companyFromService.data.company);
      console.log(companyFromService.data.company)
      console.log('CompanyStat:',company);
    } catch (err) {
      console.log(err);
    }
  };

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
      .min(10, "Debe tener por lo menos 10 caracteres")
      .matches(/^[a-z\s.]+$/, 'Solo alfabeto en minúscula y "." permitido'),
    // address: Yup.string().required("Este campo es requerido"),
    // phone: Yup.string().required("Este campo es requerido"),
    // instagram: Yup.string().required("Este campo es requerido"),
    // whatsapp: Yup.string().required("Este campo es requerido"),
    // facebook: Yup.string().required("Este campo es requerido"),
  });

  const editPost = async (values) => {
    try{
      await editCompany(id, values);
      Swal.fire({
        title: "¡Felicidades!",
        text: "Tu página ha sido editada.",
        icon: "success",
        confirmButtonColor: "#0275d8",
      });
      navigate(`/${company.nameurlcompany}`);
    }catch(err){
      Swal.fire({
        title: "Ups!",
        text: "No se ha podido editar tu página",
        icon: "error",
        confirmButtonColor: "#0275d8",
      });
    }
  }

  const handlerSubmit = async (values) => {
    console.log(values);
    try {
      const newCompany = await createCompany(values);
      const id = newCompany.data.newCompany._id;
      await addCompanyToUser(newCompany.data.userId, id);
      
      Swal.fire({
        title: "¡Felicidades!",
        text: "Tu página ha sido creado. Vamos a configurar tus productos",
        icon: "success",
        confirmButtonColor: "#0275d8",
      });
      navigate(`/productform/${id}`);
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

  const showTemplate = () => {
    Swal.fire({
      width: "850px",
      html: "<Image src=" + imageBase + " />",
    });
  };

  return (
    <>  
      <Header props="loggedin" />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Box
            className="d-flex justify-content-center"
            sx={{
              bgcolor: "background.paper",
              pt: 3,
              pb: 3,
            }}
          >
            {!id && (
              <Button onClick={() => showTemplate()}>Ver plantilla</Button>
            )}
          </Box>
          <Row>
            <Typography
              component="h6"
              variant="h6"
              align="justify"
              color="#1769aa"
              gutterBottom
              style={{ fontWeight: 550 }}
            >
              Sección principal de tu página
            </Typography>
          </Row>
          <Formik
            submitForm
            initialValues={company }
            validationSchema={formSchema}
            onSubmit={(values) => {
              id ? editPost(values) : handlerSubmit(values);
            }}
          >
            {({ errors, getFieldProps }) => (
              <FormikForm>
                <Container>
                  <Row>
                    <Col>
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
                    </Col>
                    <Col>
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
                    </Col>
                  </Row>
                  <Row>
                    <Col>
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
                    </Col>
                    <Col>
                      <div>
                        <Form.Group controlId="nameurl">
                          <Form.Label>
                            Nombre de la URL (sin espacios) solo puntos es
                            valido.
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="URL"
                            value={company.nameurlcompany}
                            {...getFieldProps("nameurlcompany")}
                          />
                        </Form.Group>
                        {errors.nameurlcompany && (
                          <div className="d-flex text-danger error-form">
                            <p>{errors?.nameurlcompany}</p>
                          </div>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <div>
                      <Form.Group controlId="formEmail">
                        <Form.Label>Descripción de la compañia</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
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
                  </Row>
                  <Row>
                    <Typography
                      component="h6"
                      variant="h6"
                      align="justify"
                      color="#1769aa"
                      className="mt-3"
                      gutterBottom
                      style={{ fontWeight: 550 }}
                    >
                      La siguiente sección va a ser el footer de tu página
                    </Typography>
                  </Row>
                  <Row>
                    <Col>
                      <div>
                        <Form.Group controlId="nameurl">
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Address"
                            value={company.footer.adress}
                            {...getFieldProps("footer.address")}
                          />
                        </Form.Group>
                        {errors.address && (
                          <div className="d-flex text-danger error-form">
                            <p>{errors?.address}</p>
                          </div>
                        )}
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <Form.Group controlId="nameurl">
                          <Form.Label>Telefono</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Telefono"
                            value={company.footer.phone}
                            {...getFieldProps("footer.phone")}
                          />
                        </Form.Group>
                        {errors.phone && (
                          <div className="d-flex text-danger error-form">
                            <p>{errors?.phone}</p>
                          </div>
                        )}
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <Form.Group controlId="nameurl">
                          <Form.Label>Instagram</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Intagram"
                            value={company.footer.instagram}
                            {...getFieldProps("footer.instagram")}
                          />
                        </Form.Group>
                        {errors.instagram && (
                          <div className="d-flex text-danger error-form">
                            <p>{errors?.instagram}</p>
                          </div>
                        )}
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <Form.Group controlId="nameurl">
                          <Form.Label>Whatsapp</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Whatsapp"
                            value={company.footer.whatsapp}
                            {...getFieldProps("footer.whatsapp")}
                          />
                        </Form.Group>
                        {errors.whatsapp && (
                          <div className="d-flex text-danger error-form">
                            <p>{errors?.whatsapp}</p>
                          </div>
                        )}
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <Form.Group controlId="nameurl">
                          <Form.Label>Facebook</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Facebook"
                            value={company.footer.facebook}
                            {...getFieldProps("footer.facebook")}
                          />
                        </Form.Group>
                        {errors.facebook && (
                          <div className="d-flex text-danger error-form">
                            <p>{errors?.facebook}</p>
                          </div>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row className="d-flex align-items-center mb-3">
                    <Col lg="2">
                      <Button className="mt-3" variant="primary" type="submit">
                        {id ? "Editar página" : "Crear Página"}
                      </Button>
                    </Col>
                    {!id && (
                      <Col>
                        <Typography
                          align="justify"
                          color="#1769aa"
                          className="mt-3"
                          gutterBottom
                        >
                          Luego de crear la página vamos a crear los productos.
                        </Typography>
                      </Col>
                    )}
                  </Row>
                </Container>
              </FormikForm>
            )}
          </Formik>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default CompanyForm;
