// Name        : config.js
// Description : Configuration file
// Author      : Arthur & Jean-Paul GERST
// Date        : october 2014  


var config = {}


config.web = {};
config.web.port = process.env.WEB_PORT || 8080;
config.web.secret = "lkfdjsjmglkjdfmlkjg ! 36";
config.database = 'localhost/belmont';

config.crypto = {}
config.crypto.password = 'lskfdngm mqkgd ç33àç)àuçàçu';
config.crypto.algo = 'aes-256-ctr';

module.exports = config;