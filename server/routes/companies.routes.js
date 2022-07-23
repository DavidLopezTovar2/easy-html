const { getAllCompanies, getOneCompany, createCompany, updateCompany, deleteCompany, addProductCompany } = require('../controllers/companies.controllers');
const { authenticate } = require('../config/jwt.config');
const { deleteCompanyFromUser } = require('../controllers/user.controller');

module.exports = (app) => {
    app.get('/api/companies', getAllCompanies);
    app.get('/api/companies/:id', getOneCompany);
    app.post('/api/companies', authenticate, createCompany);
    app.put('/api/companies/update/:id', authenticate, updateCompany);
    app.delete('/api/companies/delete/:id/:iduser', deleteCompany, deleteCompanyFromUser);
    app.put('/api/companies/addproduct/:id', authenticate, addProductCompany);

}
