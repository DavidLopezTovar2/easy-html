import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { addAListOfProductToCompany, getOneCompany2 } from "../services/company.service";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import Header from "../components/Header";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const MyProducts = () => {

    const theme = createTheme();
    const { id } = useParams();
    const [listOfProducts, setListOfProducts] = useState([])
    const [nameUrlCompany, setNameUrlCompany] = useState([])
    let navigate = useNavigate()

    const deleteAProduct = async (idProduct) => {
        try {

            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const aux = listOfProducts.filter((oneProduct) => oneProduct._id !== idProduct)
                    setListOfProducts(aux)
                    await addAListOfProductToCompany(id, aux)
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
        } catch (err) {
            Swal.fire({
                title: "Ups!",
                text: "No se ha podido eliminar tu producto",
                icon: "error",
                confirmButtonColor: "#0275d8",
            });
        }


    }

    useEffect(() => {
        id && getOneCompany2(id, setListOfProducts, setNameUrlCompany)
    }, [id])


    return (
        <>
            <Header props="loggedin"    />
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <Container sx={{ py: 8 }} maxWidth="md">
                    <Typography
                        variant="h3"
                        color="text"
                        paragraph
                    >
                        Mis productos
                    </Typography>
                    <Divider light />
                    <Grid container spacing={4}>
                        {listOfProducts?.map(product => (
                            <Grid item key={product._id} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{
                                        marginTop: "30px",
                                        marginBottom: "30px",
                                        height: "450px",
                                        width: "250px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        wordWrap: "break-word"
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={product.imageproduct}
                                        alt="random"
                                        sx={{
                                            width: "100%",
                                            height: "50%"
                                        }}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h5">
                                            {product.nameproduct}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                marginTop: "20%",
                                                fontSize: "40px"
                                            }}>
                                            {/* This is a media card. You can use this section to describe
                      the content.  */}
                                            ${product.price}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <div className="botonesInferiores">
                                        <Button size="large" onClick={() => {navigate(`/editproduct/${id}/${product._id}`)}} >Editar</Button>
                                        <Button size="large" onClick={() => { deleteAProduct(product._id) }}>Borrar</Button>
                                        </div>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <CardActions sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }} >
                    <Link to={`/productform/${id}`}><Button variant="contained">Crear un producto ➕</Button></Link>
                    <Button variant="contained" onClick= {() => window.open(`/${nameUrlCompany}`, '_blank')}>Ir a mi página 🏠</Button>
                    </CardActions>
                </Container>
            </ThemeProvider>
        </>
    )

}

export default MyProducts
