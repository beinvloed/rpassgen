'use strict';

var uuid = require('uuid'),
    md5 = require('md5'),
    nvl = require('./nvl'),
    single = null,
    pck = require('./../package.json'),
    md5file = require('md5-file').sync;


function Config() {

    var _store = {}; // keeping it private
    var _instance = md5(uuid.v1());

    this.instance = function () {
        return ''+_instance;
    };

    this.get = function(key) {
        return nvl(_store[key], null);
    };

    this.set = function(key, contents) {
        _store[key] = contents;
        return this; // fluent interface
    };

    this.fetch = function() {
        return JSON.parse(JSON.stringify(_store)); // returns proxy of original values
    };

    this.name = pck.name;
    this.class = 'Config';
    this.package = pck;
    this.version = pck.version; // read from package file directly
    this.md5 = {
        config: md5file(__filename),
        package: md5file(process.cwd()+'/package.json')
    };
    this.api = {
        express: {
            cors: true,
                appname: 'RPassGen',
                port: nvl(process.env['PORT'], 8080)
        }
    }
}

module.exports = (null === single) ? single = new Config() : single;
