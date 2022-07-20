const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const cookieParser = require('cookie-parser')
require('dotenv').config();

require('./server/config/config.mongoose');

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
require('./server/routes/user.routes')(app);
require('./server/routes/companies.routes')(app);

app.listen(port, () => console.log(`We are listening in the port: ${port}, how cool is that!!!`))