import { Typography } from "@mui/material";
import React from "react";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Mi = () => {
  const theme = createTheme();
  const navigate = useNavigate();
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
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: "background.paper",
            }}
          >
            <Container maxWidth="sm">
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
                <Button className="mb-4"
                  onClick={() => navigate("/create-company")}
                  variant="contained"
                >
                  Crear página
                </Button>
              </Stack>
              <Typography variant="h5" color="text" paragraph>
                Tus páginas web
              </Typography>
            </Container>
          </Box>
        </main>
      </ThemeProvider>
    </>
  );
};

export default Mi;
