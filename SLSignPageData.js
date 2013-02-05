var crypto = require('crypto');

/**
 * Accepts a full RondavuData object and encodes and signs all relevant fields
 * @param {Object} pageData  - The RondavuData as a JavaScript object (NOT a JSON string)
 * @param {String} privateKey - The text from "sign_private_key" file provided by Sociable Labs. Should start with "-----BEGIN PRIVATE KEY-----"
 * @param {Array<String>} [fieldsToSign] - Optional list of which fields should get encoded and signed.
 * @return {Object} signed & encoded page data
 */
function signPageData(pageData, privateKey, fieldsToSign) {
    fieldsToSign = fieldsToSign || ['page','user','primary_mo','mos'];
    fieldsToSign.forEach(function(field) {
        if (pageData[field]) {
            var base64Data = new Buffer(JSON.stringify(pageData[field])).toString('base64');
            delete pageData[field];
            pageData[field + "_base64"] = base64Data;
            pageData.signature = pageData.signature || {};
            pageData.signature[field] = signField(base64Data, privateKey);
        }
    });
    return pageData;
}

var globalPrivateKey = null;
function setPrivateKey(key) {
	globalPrivateKey = key;
}

/**
 * Accepts a base-64 encoded string and a private key, and returns the signature of the string.
 * @param {String} base64Data
 * @param {String} privateKey
 * @return {String}
 */
function signField(base64Data, privateKey) {
	privateKey = privateKey || globalPrivateKey;
	if(!privateKey) {
		throw "Private Key required";
	}
    var signer = crypto.createSign('RSA-SHA1'); // Sociable Labs also supports HMAC-SHA256
    signer.update(base64Data);
    return signer.sign(privateKey, 'base64');
}

module.exports = signPageData;

module.exports.signPageData = signPageData;

module.exports.signField = signField;

module.exports.setPrivateKey = setPrivateKey;