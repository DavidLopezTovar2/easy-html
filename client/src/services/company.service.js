const axios = require('axios');

export const createCompany = (company) => axios.post('http://localhost:8080/api/companies',{
    company
});
export const AddAProductToCompany = (dataFetched, id) => {
    axios.put(`http://localhost:8080/api/companies/addproduct/${id}`, dataFetched)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export const getCompanies = () => axios.get('http://localhost:8080/api/companies');