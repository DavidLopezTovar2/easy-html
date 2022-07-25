const axios = require('axios')

export const getCompanies = () => axios.get('http://localhost:8080/api/companies');

export const getOneCompany=(id) => axios.get(`http://localhost:8080/api/companies/${id}`); 

export const getCompanyUrl=(nameurlcompany) => axios.get(`http://localhost:8080/api/companies/url/${nameurlcompany}`); 

export const AddAProductToCompany = (dataFetched, id) => {
    axios.put(`http://localhost:8080/api/companies/addproduct/${id}`, dataFetched)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

