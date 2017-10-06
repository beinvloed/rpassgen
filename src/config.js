'use strict';

var nvl = require('./nvl');

module.exports = {
    name: 'config',
    package: require('./../package.json'),
    api: {
    },
    express: {
        cors: true,
        appname: 'RPassGen',
        port: nvl(process.env['PORT'], 8080)
    },
    version: require('./../package.json').version, // read from package file directly
    config_md5: require('md5-file').sync(__filename),
    package_json_md5: require('md5-file').sync(process.cwd()+'/package.json')
};
