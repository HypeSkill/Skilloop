// generate-key.js
const crypto = require('crypto');
const key = crypto.randomBytes(32).toString('hex');
console.log('Your new 32-byte encryption key (hex):', key);
