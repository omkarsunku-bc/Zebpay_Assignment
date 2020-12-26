const express = require('express');
const transactionRouter = express.Router();
const TRANSACTION_PATH = '/transactions/:txid';
const TRANSACTION_PATH_WITHOUT_ID = '/transactions';
const TRANSACTION_CONTROLLER = require('../Controllers/transactionController');
const BASE_CONTROLLER = require('../Controllers/baseController');

transactionRouter.get(TRANSACTION_PATH, TRANSACTION_CONTROLLER.transactionController);

transactionRouter.get(TRANSACTION_PATH_WITHOUT_ID, BASE_CONTROLLER.baseController);

module.exports = transactionRouter;
