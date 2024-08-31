

const crypto = require('crypto');

const input = "rahul";

const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log("the hash of "+input +" is :"+hash)