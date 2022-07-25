import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Header from "../components/Header";
import Swal from "sweetalert2";
import { addAListOfProductToCompany, getOneCompany2 } from "../services/company.service";


const EditProduct = () => {

    const { id, idproduct } = useParams();
    const { register, handleSubmit, formState: { errors }, reset, setValue, getValues } = useForm();
    const [listOfProducts, setListOfProducts] = useState([])
    const [company, setCompany] = useState({})
    const theme = createTheme();
    let navigate = useNavigate()

    const onSubmit = async (data) => {
        let aux = [...listOfProducts]
        let auxProduct = aux.filter((oneProduct) => oneProduct._id === idproduct)
        auxProduct = {
            nameproduct: data.nameproduct,
            imageproduct: data.imageproduct,
            price: data.price,
            _id: idproduct
        }
        aux.map((oneProduct, idx) => {
            if (oneProduct._id == idproduct){
                aux[idx] = auxProduct
            }
        })
        try {
            await addAListOfProductToCompany(id, aux)
            Swal.fire({
                title: "¡Felicidades!",
                text: "Has editado un producto exitosamente",
                icon: "success",
                confirmButtonText: 'Listo',
                footer: `<a href="/productform/${id}">¿Deseas agregar otro producto?</a>`,
                confirmButtonColor: "#0275d8",
            });
            navigate(`/myproducts/${id}`)

        } catch (err) {
            Swal.fire({
                title: "Ups!",
                text: "No se ha podido crear tu producto",
                icon: "error",
                confirmButtonColor: "#0275d8",
            });
        }

    }

    useEffect(() => {
        id && getOneCompany2(id, setListOfProducts)
    }, [id])

    useEffect(() => {
        console.log(listOfProducts)
    }, [listOfProducts])

    return (
        <>
        <Header/>
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        ✏️
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Editar un producto
                    </Typography>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Box noValidate sx={{ mt: 1 }}>
                                <TextField
                                    name='nameproduct'
                                    margin="normal"
                                    type="text"
                                    fullWidth
                                    placeholder="Name Product *"
                                    autoComplete="nameproduct"
                                    autoFocus
                                    label="Name Product *"
                                    {...register('nameproduct', {
                                        required: true,
                                        maxLength: 60,
                                        minLength: 10
                                    })}
                                />
                                {errors.nameproduct?.type === 'required' && <p>Name is required</p>}
                                {errors.nameproduct?.type === 'maxLength' && <p>Maximum 60 letters as name of product</p>}
                                {errors.nameproduct?.type === 'minLength' && <p>Minimum 10 letters as name of product</p>}
                            </Box>
                            <Box noValidate sx={{ mt: 1 }}>
                                <TextField
                                    name='imageproduct'
                                    margin="normal"
                                    type="text"
                                    fullWidth
                                    autoComplete="imageproduct"
                                    autoFocus
                                    label="Image Product *"
                                    placeholder="Image Product *"
                                    {...register('imageproduct', {
                                        required: true
                                    })}
                                />
                                {errors.imageproduct?.type === 'required' && <p>Image is required</p>}
                            </Box>
                            <Box noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="price"
                                    label="Price"
                                    type="number"
                                    id="price"
                                    autoComplete="price"
                                    placeholder="Price *"
                                    InputProps={{
                                        inputProps: { min: 0 }
                                    }}
                                    {...register('price', {
                                        required: true,
                                    })}
                                />
                                {errors.price?.type === 'required' && <p>Price is required</p>}
                            </Box>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >Enviar</Button>
                        </form>
                    </div >
                </Box>
                {/*validationsErrorMessages ? validationsErrorMessages?.map((error, idx) => <p key={idx}>{error}</p>) : <></>*/}
            </Container>
        </ThemeProvider>
        </>
    )
}

export default EditProduct