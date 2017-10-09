require('./../../src/sign-file')(__filename, console.log);

var Generator = require('./../../src/generator');
    generator = Generator.new();

describe('implements tools', function () {
    it('array contents', function () {
        expect(generator.inArray(['1', '2', '3', '4', '5', '6'], '7')).toBe(false);
        expect(generator.inArray(['1', '2', '3', '4', '5', '6'], '6')).toBe(true);
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
