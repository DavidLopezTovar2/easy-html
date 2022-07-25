const axios = require('axios');

export const createCompany = (company) => axios.post('http://localhost:8080/api/companies',{
    company
},{ withCredentials: true });

export const deleteCompany = (id, userId) => axios.delete(`http://localhost:8080/api/companies/delete/${id}/${userId}`,{
    withCredentials: true
});

export const AddAProductToCompany = (dataFetched, id) => {
    axios.put(`http://localhost:8080/api/companies/addproduct/${id}`, dataFetched, { withCredentials: true })
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export const addAListOfProductToCompany = (id, listOfProducts) => {
    axios.put(`http://localhost:8080/api/companies/addproductlist/${id}`, listOfProducts, { withCredentials: true })
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export const getOneCompany2 = (id, setListOfProducts) => {
    axios.get(`http://localhost:8080/api/companies/${id}`, { withCredentials: true })
        .then(res => setListOfProducts(res.data.company.products))
        .catch(err => console.log(err))
}

export const getCompanies = () => axios.get('http://localhost:8080/api/companies');

export const getOneCompany = (id) => axios.get(`http://localhost:8080/api/companies/${id}`);

export const editCompany = (id, values) => axios.put(`http://localhost:8080/api/companies/update/${id}`,{values},{ withCredentials: true}) 