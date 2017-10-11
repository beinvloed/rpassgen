require('./../../src/sign-file')(__filename, console.log);

var Generator = require('./../../src/generator');
    generator = Generator.new();

describe('implements tools', function () {
    it('array contents', function () {
        expect(generator.inArray(['1', '2', '3', '4', '5', '6'], '7')).toBe(false);
        expect(generator.inArray(['1', '2', '3', '4', '5', '6'], '6')).toBe(true);
    });
    it('cast int', function () {
        expect(generator.toInt(1.001)).toBe(1);
        expect(generator.toInt(3.12)).toBe(3);
        expect(generator.toInt(true)).toBe(false);
        expect(generator.toInt('ABDB')).toBe(false);
    });
    it('vowels check', function () {
        expect(generator.isVowel('z')).toBe(false);
        expect(generator.isVowel('x')).toBe(false);
        expect(generator.isVowel('Z')).toBe(false);
        expect(generator.isVowel('X')).toBe(false);
        // but
        expect(generator.isVowel('y')).toBe(true);
        expect(generator.isVowel('Y')).toBe(true);
        // as well as
        expect(generator.isVowel('a')).toBe(true);
        expect(generator.isVowel('e')).toBe(true);
        expect(generator.isVowel('i')).toBe(true);
        expect(generator.isVowel('o')).toBe(true);
        expect(generator.isVowel('u')).toBe(true);
        expect(generator.isVowel('A')).toBe(true);
        expect(generator.isVowel('E')).toBe(true);
        expect(generator.isVowel('I')).toBe(true);
        expect(generator.isVowel('O')).toBe(true);
        expect(generator.isVowel('U')).toBe(true);
    });
    it('consonants check', function () {
        expect(generator.isConsonant('a')).toBe(false);
        expect(generator.isConsonant('e')).toBe(false);
        expect(generator.isConsonant('A')).toBe(false);
        expect(generator.isConsonant('E')).toBe(false);
        // but
        expect(generator.isConsonant('y')).toBe(false);
        expect(generator.isConsonant('Y')).toBe(false);
        // and...
        expect(generator.isConsonant('B')).toBe(true);
        expect(generator.isConsonant('C')).toBe(true);
        expect(generator.isConsonant('D')).toBe(true);
        expect(generator.isConsonant('F')).toBe(true);
        expect(generator.isConsonant('G')).toBe(true);
        expect(generator.isConsonant('H')).toBe(true);
        expect(generator.isConsonant('J')).toBe(true);
        expect(generator.isConsonant('K')).toBe(true);
        expect(generator.isConsonant('L')).toBe(true);
        expect(generator.isConsonant('M')).toBe(true);
        expect(generator.isConsonant('N')).toBe(true);
        expect(generator.isConsonant('P')).toBe(true);
        expect(generator.isConsonant('Q')).toBe(true);
        expect(generator.isConsonant('R')).toBe(true);
        expect(generator.isConsonant('S')).toBe(true);
        expect(generator.isConsonant('T')).toBe(true);
        expect(generator.isConsonant('V')).toBe(true);
        expect(generator.isConsonant('X')).toBe(true);
        expect(generator.isConsonant('Z')).toBe(true);
        expect(generator.isConsonant('W')).toBe(true);
    });
});

describe('implements draw feature', function () {
    it('random int with inclusive min-max', function () {
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
        expect([1, 2, 3, 4, 5].indexOf(generator.rand(1, 5))).not.toBe(-1);
    });
    it('draw from array of elements (pseudo-rand / unique)', function () {
        var _el = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
        var _draw = generator.draw(_el, 5, -1); // negative drives pseudo
        expect(_draw.indexOf(_draw[0]) === _draw.lastIndexOf(_draw[0])).toBe(true);
        expect(_draw.indexOf(_draw[1]) === _draw.lastIndexOf(_draw[1])).toBe(true);
        expect(_draw.indexOf(_draw[2]) === _draw.lastIndexOf(_draw[2])).toBe(true);
        expect(_draw.indexOf(_draw[3]) === _draw.lastIndexOf(_draw[3])).toBe(true);
        expect(_draw.indexOf(_draw[4]) === _draw.lastIndexOf(_draw[4])).toBe(true);
    });
    it('draw from array of defaults (pseudo-rand / unique)', function () {
        var _undef;
        var _elDefaults = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'], _undef; // undefined = -1 and negative drives pseudo
        var _drawDefaults = generator.draw(_elDefaults, _undef, _undef);
        expect(_drawDefaults.length).toBe(2);
        expect(_drawDefaults.indexOf(_drawDefaults[0]) === _drawDefaults.lastIndexOf(_drawDefaults[0])).toBe(true);
        expect(_drawDefaults.indexOf(_drawDefaults[1]) === _drawDefaults.lastIndexOf(_drawDefaults[1])).toBe(true);
        expect(_drawDefaults.indexOf(_drawDefaults[2])).toBe(-1);
    });
    it('Safety switch for draw from array of elements (pseudo-rand / unique)', function () {
        var _el2 = ['A', 'B', 'C'];
        var _draw2 = generator.draw(_el2, 5, -1); // unrealistic to have 5 unique out of 3
        expect(_draw2.length).toBe(_el2.length);  // can't produce any more unique than array holds it
        expect(_draw2.length).not.toBe(5);
        expect(_draw2.indexOf('A') === _draw2.lastIndexOf('A')).toBe(true);
        expect(_draw2.indexOf('B') === _draw2.lastIndexOf('B')).toBe(true);
        expect(_draw2.indexOf('C') === _draw2.lastIndexOf('C')).toBe(true);
    });
    it('draw from array of elements (non unique but with offset)', function () {
        var _el3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
            _len3 = 15,
            _offset3 = 5;
        var _draw3 = generator.draw(_el3, _len3, _offset3);
        expect(_draw3.length).toBe(_len3); // 15 expected
        expect(_draw3.length).not.toBe(_el3.length);

        /**
         * I know it's a bit of Chuck Norris meets Bruce Lee half-way ;-)
         * but it proves that A____A so there is no AA____ and repetitions
         * fall under pattern
         */
        var check = {}, conv2str = _draw3.join('');
        for (var x in _draw3) {
            check[_draw3[x]] = conv2str.split(_draw3[x]);
            check[_draw3[x]].splice(0, 1);  // ignore first segments before string
            check[_draw3[x]].splice(-1, 1); // ignore last segments after
        }
        for (var k in check) {
            if (check[k].length === 0) {
                expect(check[k].length).toBe(0); // if occurs only once
            } else {
                for (var y in check[k]) {
                    //console.log(check[k][y]);
                    //console.log(check[k][y].length>=_offset3-1);
                    expect(check[k][y].length>=_offset3-1).toBe(true); // at least the declared offset
                }
            }
        }
    });
    it('Input errors handling', function () {
        var _elErr = ['A', 'B', 'C'], generator2 = Generator.new();
        var _drawErr1 = generator2.draw(_elErr, {boo: true}, -1);
        var _drawErr2 = generator2.draw(_elErr, 3, {boo: true});
        var _drawErr3 = generator2.draw({boo: true}, 3, -1);
        expect(_drawErr1.length).toBe(0); // empty
        expect(_drawErr2.length).toBe(0); // empty
        expect(_drawErr3.length).toBe(0); // empty

        // errors log gets populated with audit trail
        expect(generator2.errors.length).toBe(3); // 3 errors above logged

        // with details
        expect(generator2.errors[0].message).toBe("Not a valid number defining length"); // with message
        expect(generator2.errors[1].message).toBe("Not a valid number defining offset");
        expect(generator2.errors[2].message).toBe("Not a valid array of elements");
    });
});

