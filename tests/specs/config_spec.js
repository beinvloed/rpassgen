require('./../../src/sign-file')(__filename, console.log);

var md5 = require('md5'),
    config = require('./../../src/config');

describe('basic config features', function () {
    it('contains all package.json info', function () {
        expect(md5(JSON.stringify(require('../../package.json'))))
            .toBe(md5(JSON.stringify(config.package)));
    });
    it('Instance has a signature proving it is singleton', function () {
        expect(config.instance().length).toBe(32);
        expect(config.instance()).toBe(require('./../../src/config').instance());
    });
    it('exposes information directly', function () {
        expect(require('../../package.json').version)
            .toBe(config.version);
        expect(require('../../package.json').name)
            .toBe(config.name);
        expect('Config').toBe(config.class);
    });
});

describe('Implements getters/setters', function () {
    config.set('key1', 12345);
    config.set('key2', 2);
    it('set / get', function () {
        expect(config.get('key1')).toBe(12345);
    });
    it('overwrite', function () {
        config.set('key1', 'MOOO');
        expect(config.get("key1")).toBe('MOOO');
    });
    it('fetch', function () {
        expect(JSON.stringify(config.fetch()))
            .toBe(JSON.stringify({key1: 'MOOO', key2: 2}));
    });
});
