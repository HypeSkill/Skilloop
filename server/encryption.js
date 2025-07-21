require('dotenv').config();
const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
console.log('ENCRYPTION_KEY:', process.env.ENCRYPTION_KEY); 

const key = Buffer.from(process.env.ENCRYPTION_KEY, 'hex'); // 32 bytes for aes-256
const ivLength = 16; // For AES, this is always 16

function encrypt(text) {
  const iv = crypto.randomBytes(ivLength);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return iv.toString('hex') + ':' + encrypted;
}

function decrypt(encrypted) {
  const [ivHex, encryptedText] = encrypted.split(':');
  const iv = Buffer.from(ivHex, 'hex');
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

module.exports = { encrypt, decrypt };