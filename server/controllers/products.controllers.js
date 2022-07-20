const Product = require('../models/products.model');

module.exports.createProduct = (req, res) => {
    console.log(req.body)
    Product.create(req.body)   
        .then(newProduct => res.json({ newProduct }))
        .catch(err => res.status(500).json({ error: err, msg: 'Ups no hemos podido crear un nuevo producto' }));
}

module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then(products => res.json({ products }))
        .catch(err => res.status(500).json({ error: err, msg: 'Ups no hemos podido traerte los productos' }));
}

module.exports.getOneProduct = (req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json({ product }))
        .catch(err => res.status(404).json({ error: err, msg: 'Ups no hemos podido traerte el producto' }));
}

module.exports.updateProduct = (req, res) => {
    console.log(req.body.product)
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedProduct => res.json({ updatedProduct }))
        .catch(err => res.status(500).json({ msg: 'Ups no hemos podido actualizar el producto', error: err }));
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json({ deleteConfirmation }))
        .catch(err => res.status(500).json({ msg: 'Ups no hemos podido borrar el producto', error: err }));
}
