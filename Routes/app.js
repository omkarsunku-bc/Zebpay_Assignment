const express = require('express');
const transactionRouter = require('../Routes/routes');
const app = express();

app.use('/eth/api/v1', transactionRouter); 
module.exports = app;
