const { getAllProducts, getOneProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/products.controllers');

module.exports = (app) => {
    app.get('/api/products', getAllProducts);
    app.get('/api/products/:id', getOneProduct);
    app.post('/api/products', createProduct);
    app.put('/api/products/update/:id', updateProduct);
    app.delete('/api/products/delete/:id', deleteProduct);

}
