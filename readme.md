SLSignPageData
==============

Node.js module to sign page data (RondavuData) for use with Sociable Labs's widgets. More information about these widgets
avaliable at http://sociablelabs.com


Installation
------------

    npm install SLSignPageData

Usage
-----

    var SLSignPageData = require('SLSignPageData');

    var RondavuData = {config:{version:"1.2"}, page: .....

    SLSignPageData.signPageData(RondavuData);

    console.log(JSON.stringify(RondavuData));
