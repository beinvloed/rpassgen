'use strict';

var md5file = require('md5-file'),
    _last, _file, _sep = '/',
    color   = require('bash-color');

(function(){
    module.exports = function (testfile, display) {
        if (typeof display !== 'function') {
            display = console.log;
        }
        _sep  = (testfile.indexOf(_sep) < 0) ? '\\' : _sep;
        _file = testfile.split(_sep);
        _last = _file[(_file.length - 1)];
        display(
            'MD5: ' +
            color.wrap(md5file.sync(testfile), color.colors.BLUE, color.styles.bold) +
            ' File: ' +
            color.wrap(_last, color.colors.PURPLE, color.styles.bold)
        );
        return;
    };

})();
