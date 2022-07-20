const { Schema, model } = require('mongoose');

const productsSchema = new Schema ({

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
    },
    
})

const EasyHTMLProducts = model('EasyHTMLProducts', productsSchema);

module.exports = EasyHTMLProducts;
