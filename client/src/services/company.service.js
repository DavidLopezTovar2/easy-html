const axios = require('axios');

export const createCompany = (company) => axios.post('http://localhost:8080/api/companies',{
    company
},{ withCredentials: true });

export const deleteCompany = (id, userId) => axios.delete(`http://localhost:8080/api/companies/delete/${id}/${userId}`,{
});

export const AddAProductToCompany = (dataFetched, id) => {
    axios.put(`http://localhost:8080/api/companies/addproduct/${id}`, dataFetched, { withCredentials: true })
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export const getCompanies = () => axios.get('http://localhost:8080/api/companies');

export const getOneCompany = (id) => axios.get(`http://localhost:8080/api/companies/${id}`);


