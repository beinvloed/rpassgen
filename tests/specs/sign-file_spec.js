require('./../../src/sign-file')(__filename, console.log);

function TestConsole() {

    this.message = '';

    this.log = function (string) {
        this.message = string;
    };
}

var md5 = require('md5'),
    undef,
    testsconsole = new TestConsole();

describe('sign-file generates expected output', function () {

    require('./../../src/sign-file')(process.cwd()+'/.gitignore', testsconsole.log);

    it('values passed', function () {
        expect(md5(testsconsole.message)).toBe('d41d8cd98f00b204e9800998ecf8427e');
    });
});

describe('sign-file generates expected output', function () {

    var out = require('./../../src/sign-file')(process.cwd()+'/.gitignore', undef, true); // quiet

    it('values passed', function () {
        expect(md5(out)).toBe('ff56273e8099da4d16027c6d2aa65790');
    });
});

