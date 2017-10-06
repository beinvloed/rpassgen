require('./../../src/sign-file')(__filename, console.log);

var undef, nvl = require('./../../src/nvl');

describe('nvl', function () {

    it('values passed', function () {
        expect(typeof nvl({ obj: true})).toBe('object');
        expect(JSON.stringify(nvl({obj: true}))).toBe('{"obj":true}');
        expect(typeof nvl(1234)).toBe('number');
        expect(nvl(1234)).toBe(1234);
    });
    it('no value', function () {
        expect(typeof nvl(undef)).not.toBe('undefined');
        expect(nvl(undef)).toBe(null);
    });
    it('no value + fallback', function () {
        expect(typeof nvl(undef, 'fallback')).not.toBe('undefined');
        expect(nvl(undef, 'fallback')).toBe('fallback');
    });
});