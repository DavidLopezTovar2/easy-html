const axios = require('axios')

export const getCompanies = () => axios.get('http://localhost:8080/api/companies');
