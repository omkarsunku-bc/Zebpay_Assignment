const response = require('./ResponseModel');


exports.Erc20Transfer = (transaction, receipt) => {
    const result = response.response();
    result.block.blockHeight = transaction.blockNumber;
    result.outs.push({
      address: "0x" + transaction.input.substring(34, 75),
      value: parseInt(transaction.input.substring(75, 138), 16),
      type: "token",
      coinspecific: { tokenAddress: receipt.to }
    });
    result.ins.push({
      address: transaction.from,
      value: "-" + parseInt(transaction.input.substring(75, 138), 16),
      type: "token",
      coinspecific: { tokenAddress: receipt.to }
    });
    result.hash = transaction.hash;
    result.state = receipt.status ? "confirmed" : "Reverted";
    result.depositType = "Contract";
    return JSON.stringify(result);
  };