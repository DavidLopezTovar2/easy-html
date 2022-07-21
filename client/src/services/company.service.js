const axios = require('axios');

export const createCompany = (company) => axios.post('http://localhost:8080/api/companies',{
    company
});