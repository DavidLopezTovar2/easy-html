const User = require('../controllers/user.controller');

module.exports = (app) => {
    app.post('/api/users/create', User.register);
    app.post('/api/users/login', User.login);
}
