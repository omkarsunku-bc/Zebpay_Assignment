const Account_Trans = "0x";
const Erc20_Trans = "0xa9059cbb";//MethodId in the input for ERC20
const service = require("../Services/connectWeb3");
const AccountTran = require('../Models/AccountTranModel');
const Erc20Trans = require('../Models/ERC20TranModel');
const ContractTran = require('../Models/ContractExeModel');

exports.transactionController = (req, res) => {
    try {
        const transactionID = req.params.transactionid;
        if (transactionID && !transactionID == undefined) {
            res.statusCode = 400;
            res.send({ status: 400, data: { message: "Please give a transaction Id and try again" } });
            return;
        }
        service.getTransaction(transactionID)
            .then(transaction => {
                service.getTransactionReceipt(transactionID)
                    .then(receipt => {
                        if (transaction.to) {
                            //Account Transfers
                            if (transaction.input === Account_Trans) {
                                res.send(AccountTran.accountTransfer(transaction, receipt));
                            }
                            //Erc20 Token transfers
                            else if (transaction.input.substring(0, 10) === Erc20_Trans) {
                                res.send(Erc20Trans.Erc20Transfer(transaction, receipt));
                            }
                            //Contract execution
                            else {
                                res.send(ContractTran.contractExecution(transaction, receipt));
                            }
                        } else {
                            res.send({ status: 500, data: { messgae: "Invalid Transaction Id" } })
                        }
                    })
                    .catch(error => {
                        throw error;
                    });
            })
            .catch(error => {
                throw error;
            });
    } catch (err) {
        res.statusCode = 500;
        res.send({ status: 500, data: { message: 'Unhandled error: ' + err } });
        return;
    }
}