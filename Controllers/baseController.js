exports.baseController = (req, res) => {
    res.statusCode = 500;
    res.send({ status: 500, data: 'Please give a transaction Id at the end of this url and try again. Please try using as this format $HOST:$PORT/eth/api/v1/transaction/<YOUR_TXID>' });
}
