'use strict';

var config = require('./config'),
    md5 = require('md5'),
    nvl = require('./nvl');

function Generator() {

    var _generator = require('./generator-config.json');

    this.toString = function(value) {
        return (new String(value)).valueOf();
    };

    /**
     * Actual draw logic
     * @param array elements Elements to draw from
     * @param int   count    Number of elements to draw
     * @param offset         After how many elements in draw a result can repeat itself eg. ABFLEA = 4 (5th element was once pulled)
     */
    this.random = function(elements, count, offset) {
        try {
            count = this.toInt(nvl(count, 2));
            offset = this.toInt(nvl(offset, -1));
            if (typeof elements.indexOf !== 'function') {
                throw new Error('Not a valid array of elements');
            }
            if (typeof count !== 'number') {
                throw new Error('Not a valid number defining length');
            }
            if (typeof offset !== 'number') {
                throw new Error('Not a valid number defining offset');
            }

            console.log();


        } catch (err) {

        }


    };


    this.toInt = function(input) {
        try {
            if (typeof count !== 'number') {
                throw new Error('Not a valid number defining length');
            }
            return Math.floor(parseInt(count));
        } catch (err) {
            return false;
        }
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
