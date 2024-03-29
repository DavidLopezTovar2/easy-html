import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { getCompanies } from "../services/company.service";

const Home = () => {
  const navigate = useNavigate();


  const [companies, setCompanies] = useState([]);

  const getCompaniesFromService = async () => {
    try {
        const companyServices = await getCompanies();
        setCompanies(companyServices.data.companies);

    } catch(err){

    }
}

useEffect(() => {
  getCompaniesFromService()

}, []);

// const GoToUrlCompany = async (nameurlcompany) => {
//   navigate(`/${nameurlcompany}`, { replace: true });

// }

  // const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const theme = createTheme();

  const Copyright = () => {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="http://localhost:3000/">
            Easy_HTML.com
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Easy_HTML
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Acá encontrarás la forma más económica y sencilla para crear la
              página web favorita de tus clientes. Atrevete a probar que crear
              páginas web nunca fue tan fácil.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button onClick={() => navigate('/login')}variant="contained">Login</Button>
              <Button onClick={() => navigate('/register')} variant="outlined">Registrate</Button>
              <Button color="error" onClick={() => navigate('/services')} variant="outlined">Servicios</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Typography
              variant="h5"
              color="text"
              paragraph
            >
              Mira nuestros proyectos
            </Typography>
          <Grid container spacing={4}>

          { companies?.map(company=> (
            // {cards.map((card) => (
              <Grid item key={company._id} xs={12} sm={6} md={4}>
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
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {company.title} 
                    </Typography>
                    <Typography>
                      {/* This is a media card. You can use this section to describe
                      the content.  */}
                      {company.descriptioncompany}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                    onClick= {() => window.open(`/${company.nameurlcompany}`, '_blank')}
                    // GoToUrlCompany(company.nameurlcompany)}
                     target="_blank"
                     size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
};

export default Home;
