const User = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
    app.post('/api/users/create', User.register);
    app.post('/api/users/login', User.login);
    app.post('/api/users/logout',authenticate, User.logout);
    app.put('/api/users/addCompany/:id',authenticate, User.addCompany);
    app.get('/api/users/:id', User.getUser);
    app.get('/api/user',authenticate, User.actualUser)
}
