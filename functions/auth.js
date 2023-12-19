const CryptoJS = require("crypto-js");
const key = CryptoJS.SHA256(process.env.ENC_KEY);
const iv = CryptoJS.enc.Base64.parse("");

module.exports = {
  encrypt: (dataToEncrypt) => {
    const data =
      typeof dataToEncrypt === "string"
        ? dataToEncrypt
        : JSON.stringify(dataToEncrypt);
    
    return CryptoJS.AES.encrypt(data, key, {
      keySize: 32,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString();
  },

  decrypt: (encryptString) => {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptString, key, {
        keySize: 32,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });

      return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      console.error(error);
      return false;
    }
  },
  generatePassword :(length) =>{
    var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var password = "";
    
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * char.length);
      password += char.charAt(randomIndex);
    }
    
    return password;
  }
  
};
