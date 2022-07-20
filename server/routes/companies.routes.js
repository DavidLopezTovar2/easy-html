const { getAllCompanies, getOneCompany, createCompany, updateCompany, deleteCompany } = require('../controllers/companies.controllers');

module.exports = (app) => {
    app.get('/api/companies', getAllCompanies);
    app.get('/api/companies/:id', getOneCompany);
    app.post('/api/companies', createCompany);
    app.put('/api/companies/update/:id', updateCompany);
    app.delete('/api/companies/delete/:id', deleteCompany);

}
