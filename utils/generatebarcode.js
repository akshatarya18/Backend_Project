

const {randomBytes} = require('crypto');

const generateBarcode = ()=>{
    return randomBytes(6).toString("hex").toUpperCase();
};

module.exports = generateBarcode;
