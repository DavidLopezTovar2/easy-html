const { getAllCompanies, getOneCompany, createCompany, updateCompany, deleteCompany, addProductCompany } = require('../controllers/companies.controllers');
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
    app.get('/api/companies', getAllCompanies);
    app.get('/api/companies/:id', getOneCompany);
    app.post('/api/companies', authenticate, createCompany);
    app.put('/api/companies/update/:id', authenticate, updateCompany);
    app.delete('/api/companies/delete/:id', authenticate, deleteCompany);
    app.put('/api/companies/addproduct/:id', authenticate, addProductCompany);

}
