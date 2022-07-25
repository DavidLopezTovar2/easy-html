import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../services/user.service";
import { getOneCompany, deleteCompany } from "../services/company.service";
import Swal from "sweetalert2";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

const Mi = () => {
  const { id } = useParams();
  const theme = createTheme();
  const navigate = useNavigate();
  const [company, setCompany] = useState();

  useEffect(() => {
    companyFromServiceByUser();
  }, []);

  const GoToUrlCompany = async (nameurlcompany) => {
    navigate(`/${nameurlcompany}`);
  };

  const companyFromServiceByUser = async () => {
    try {
      const userFromService = await getUser(id);
      try {
        const companyFromService = await getOneCompany(
          userFromService.data.user.company
        );
        setCompany(companyFromService.data.company);
      } catch (err) {
        setCompany(false);
      }
    } catch (err) {
      Swal.fire({
        title: "Ups!",
        text: "No hemos podido cargar la página",
        icon: "error",
        confirmButtonColor: "#0275d8",
      });
    }
  };

  const deleteCompanyFromService = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0275d8",
      cancelButtonColor: "#d9534f",
      confirmButtonText: "Si, eliminar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteCompany(company._id, id);
          Swal.fire("¡Eliminado!", "Tu compañia ha sido eliminada", "success");
          navigate(`/mi/${id}`);
        } catch (err) {
          Swal.fire({
            title: "¡Ups!",
            text: "No cuentas con los permisos para borrar esta compañia",
            icon: "error",
            confirmButtonColor: "#0275d8",
          });
        }
      }
    });
  };

  const editCompany = () => {
    navigate(`/edit-company/${company._id}`);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header props="loggedin" />
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
        <main>
          <Box
            sx={{
              bgcolor: "background.paper",
            }}
          >
            {!company && (
              <Container>
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  Este es tu home. Acá podrás crear tu página y editarla.
                  ¡Animate!
                </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Button
                    className="mb-4"
                    onClick={() => navigate("/create-company")}
                    variant="contained"
                  >
                    Crear página
                  </Button>
                </Stack>
              </Container>
            )}
          </Box>
          <Container sx={{ py: 8 }}>
            {company && (
              <Grid container xs={12} sm={6} md={4} item>
                <Typography variant="h5" color="text" paragraph>
                  Tu página web
                </Typography>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={company.imgcompany}
                    alt="Company image"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {company.title}
                    </Typography>
                    <Typography>{company.slogan}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => GoToUrlCompany(company.nameurlcompany)}
                      size="small"
                    >
                      View
                    </Button>
                    <Button
                      color="error"
                      onClick={() => deleteCompanyFromService()}
                      size="small"
                    >
                      Eliminar
                    </Button>
                    <Button
                      color="secondary"
                      onClick={() => editCompany()}
                      size="small"
                    >
                      Editar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )}
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
};

export default Mi;
