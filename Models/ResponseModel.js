var keys = require('../Config/keys');

exports.response = () => {
    return {
        block: {},
        outs: [],
        ins: [],
        hash: null,
        currency: keys.keys.currency,
        chain: keys.keys.currency,
        state: null,
        depositType: null
    }
}