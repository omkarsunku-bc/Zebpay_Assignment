const response = require('./ResponseModel');

exports.contractExecution = (transaction, receipt) => {
  const result = response.response();
    result.block.blockHeight = transaction.blockNumber;
    result.outs.push({
      address: transaction.to,
      value: transaction.value,
      type: "transfer",
      coinspecific: { tracehash: transaction.hash }
    });
    result.ins.push({
      address: transaction.from,
      value: "-" + transaction.value,
      type: "transfer",
      coinspecific: { tracehash: transaction.hash }
    });
    result.hash = transaction.hash;
    result.state = receipt.status ? "confirmed" : "Reverted";
    result.depositType = "Contract";
    return JSON.stringify(result);
  };