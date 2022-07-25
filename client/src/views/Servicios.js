
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


const Services = () => {

const navigate = useNavigate();    

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
          <Container maxWidth="xl">
            <Typography
              component="h1"
              variant="h2"
              paddingTop= "50px"
              paddingLeft="50px"
              fontSize="100px"
              fontWeight="bold"
              align="left"
              display="flex"
              color="text.primary"
              gutterBottom
            >
            
              Crear tu propia tu propio sitio web
              <img id ="imgservicios" src="https://uploads-ssl.webflow.com/629671c629e6b6281674cb8b/62ceee4c8730ba0005126e58_hero_Ecommerce-p-800.png" alt="" />
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
              <Button onClick={() => navigate('/register')} variant="contained">¡Comienza ahora!</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Typography
              variant="h5"
              align="center"
              color="text"
              fontSize="50px"
              fontWeight="bold"
              paragraph
            >
              Digitalízate: tu canal de ventas online a un solo click
            </Typography>
          <Grid container spacing={4}>


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
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
};

export default Services;


