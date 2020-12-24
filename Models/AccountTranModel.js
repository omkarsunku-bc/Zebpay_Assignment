const response = require('./ResponseModel');

exports.accountTransfer = (transaction, receipt) => {
    const result = response.response();
    result.block.blockHeight = transaction.blockNumber;
    result.outs.push({
      address: transaction.to,
      value: transaction.value
    });
    result.ins.push({
      address: transaction.from,
      value: "-" + transaction.value
    });
    result.hash = transaction.hash;
    result.state = receipt.status ? "confirmed" : "Reverted";
    result.depositType = "account";
    return JSON.stringify(result);
  };