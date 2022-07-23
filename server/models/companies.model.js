const { Schema, model } = require('mongoose');

const companiesSchema = new Schema({

    title: {
        type: String,
        required: [true, 'Debe tener un titulo valido'],
        minlength: [10, 'Debe tener un titulo con minimo 10 caracteres']
    },
    descriptioncompany: {
        type: String,
        required: [true, 'Debe tener un descripcion valida'],
        minlength: [100, 'Debe tener una descripcion minimo con 100 caracteres']
    },
    slogan: {
        type: String,
        required: [true, 'Debe tener un slogan valida'],
        minlength: [30, 'Debe tener una slogan minimo con 30 caracteres']
    },
    imgcompany: {
        type: String,
        required: [true, 'Debe tener una imagen de la compañia'],
    },
    products: {
        type: [{
            nameproduct: {
                type: String,
                required: [true, 'Debe tener un nombre valido'],
                minlength: [5, 'Debe tener un nombre con minimo 10 caracteres']
            },
            imageproduct: {
                type: String,
                required: [true, 'Debe tener una imagen valida'],
            },
            price: {
                type: Number,
                required: [true, 'Debe asignar un precio valida'],
                minlength: [2, 'Debe tener una precio minimo con 2 digitos']
            }
        }],
    },
    nameurlcompany: {
        type: String,
        unique: [true, 'Este dominio ya se encuentra ocupado'],
        required: [true, 'Debe asigar un nombre de URL para su pagina'],
        minlength: [10, 'La URL Debe tener un minimo de 10 caracteres']
    },
    footer: {
        type: {
            address: {
                type: String
            },
            phone: {
                type: String
            },
            instagram: {
                type: String
            },
            whatsapp: {
                type: String
            },
            facebook: {
                type: String
            }
        },
        //required: [true, 'Debe tener un footer valida']
    },
    colorpage: {
        type: String,
    },

})

const EasyHTMLCompany = model('EasyHTMLCompany', companiesSchema);

module.exports = EasyHTMLCompany;
