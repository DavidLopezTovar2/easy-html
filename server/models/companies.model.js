const { Schema, model } = require('mongoose');

const companiesSchema = new Schema ({

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
        type: Array,
    },
    nameurlcompany: {
        type: String,
        required: [true, 'Debe asigar un nombre de URL para su pagina'],
        minlength: [10, 'La URL Debe tener un minimo de 10 caracteres']
    },
    footer: {
        type: String,
        required: [true, 'Debe tener un footer valida'],
        minlength: [3, 'Debe tener un footer minimo de 3 caracteres']
    },
    colorpage: {
        type:String,
    }, 
    
})

const EasyHTMLCompany = model('EasyHTMLCompany', companiesSchema);

module.exports = EasyHTMLCompany;
