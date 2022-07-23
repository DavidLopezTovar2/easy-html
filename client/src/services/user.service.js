const axios = require('axios');

export const createUser = (user) => axios.post('http://localhost:8080/api/users/create',{
    user
});

export const login = (user) => axios.post('http://localhost:8080/api/users/login', {
    email: user.email,
    password: user.password
}, { withCredentials: true });

export const logout = () => axios.post('http://localhost:8080/api/users/logout',
{},{ withCredentials: true });

export const addCompanyToUser = (userId, companyId) => axios.put(`http://localhost:8080/api/users/addCompany/${userId}`,{
    companyId
},{ withCredentials: true });

export const getUser = (id) => axios.get(`http://localhost:8080/api/users/${id}`)


