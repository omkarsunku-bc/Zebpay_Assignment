const Web3 = require('web3');
const keys = require('../Config/keys');

const web3 = new Web3(new Web3.providers.HttpProvider(keys.keys.infuraUrl)); 

exports.getTransaction = id => {
  return web3.eth.getTransaction(id);
};

exports.getTransactionReceipt = id => {
  return web3.eth.getTransactionReceipt(id);
};