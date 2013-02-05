SLSignPageData
==============

Node.js module to sign page data (RondavuData) for use with Sociable Labs's widgets. More information about these widgets
avaliable at http://sociablelabs.com


Installation
------------

    npm install SLSignPageData

Usage
-----
	var fs = require('fs');
    var SLSignPageData = require('slsignpagedata');
    
    var privateKey = fs.readFileSync('./sign_private_key').toString();
    
    SLSignPageData.setPrivateKey(privateKey);

    var RondavuData = {config:{version:"1.2"}, page: .....
    
    SLSignPageData.signPageData(RondavuData);

    console.log(JSON.stringify(RondavuData));
    
    
API
-----

**signPageData(RondavuData, [privateKey=null, [fieldsToSign=['page','user','primary_mo','mos']]])**

Modifies and returns the signed RondavuData object with the keys specified by `fieldsToSign`
converted to Base64 and a `signature` field added and populated. If no `privateKey` is given, 
the global one supplied to `setPrivateKey()` will be used.

**setPrivateKey(privateKey)**

Accepts a string `privateKey` - this should be the contents of the `sign_private_key` supplied
by Sociable Labs. This becomes the default private key used by the other methods unless you 
supply one.

**signField(base64Data, [privateKey=null])**

Returns the signature for a single field. This method is used internally by `signPageData()`.


MIT License
-----

Copyright (c) 2013 Nathan Friedly - http://nfriedly.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

