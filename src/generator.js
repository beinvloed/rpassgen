'use strict';

var config = require('./config'),
    md5 = require('md5'),
    nvl = require('./nvl');

function Generator() {

    var _generator = require('./generator-config.json');

    this.toString = function(value) {
        return (new String(value)).valueOf();
    };

    this.inArray = function(arr, value) {
        for (var k in arr) arr[k] = this.toString(arr[k]);
        return -1 !== arr.indexOf((new String(value)).valueOf());
    };

    this.isVowel = function(char) {
        return (true === this.inArray(_generator.range.letters.vowels, this.toString(char).toLocaleUpperCase()));
    };

    this.isConsonant = function(char) {
        return (true === this.inArray(_generator.range.letters.consonants, this.toString(char).toLocaleUpperCase()));
    };

    /**
     * Generates C/V patterns
     * @param int length Length of the word to be generated
     * @returns {Generator}
     * @see JSON config file 'patterns' section
     */
    this.generatePattern = function(length) {

        return this;
    };

    /**
     * Populates generated CV patterns with letters
     * @param int allowRepetition Number of characters after which a letter can repeat itself in the word.
     * @returns {Generator}
     */
    this.populateLetters = function(allowRepetition) {
        allowRepetition = nvl(allowRepetition, 2);
        return this;
    };

    this.new = function() {
        return new Generator();
    }
};

module.exports = new Generator();
