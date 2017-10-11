'use strict';

var config = require('./config'),
    md5 = require('md5'),
    nvl = require('./nvl');

function Generator() {

    var _generator = require('./generator-config.json');

    this.errors = [];

    this.kill_idle      = 120;
    this.minlength      = 2;
    this.default_offset = 2;
    this.all_unique     = -1;

    this.toString = function(value) {
        return (new String(value)).valueOf();
    };

    /**
     * Actual draw logic
     * @param array elements Elements to draw from
     * @param int   length   Number of elements to draw
     * @param offset         -1 means all unique, After how many elements in draw a result can repeat itself eg. ABFLEA = 5 (exclusive, the 5th element was once pulled)
     */
    this.draw = function(elements, length, offset) {
        var _past = {}, draw = [], _itm, _r = -1, _elen = -1, _idle = 0,
            _input = JSON.parse(JSON.stringify({
                elements: {
                    items: elements,
                    length: -1
                },
                init: {
                    length: length,
                    offset: offset
                }
            }));

        try {
            _input.parsed = {
                length: length = this.toInt(nvl(length, this.minlength)),
                offset: offset = this.toInt(nvl(offset, this.default_offset))
            };

            if (typeof elements.indexOf !== 'function') {
                throw new Error('Not a valid array of elements');
            }
            _input.elements.length = _elen = elements.length;

            if (typeof length !== 'number') {
                throw new Error('Not a valid number defining length');
            }
            if (typeof offset !== 'number') {
                throw new Error('Not a valid number defining offset');
            }

            while (draw.length < length && _idle < this.kill_idle) { // we are after string and elements can be multi dimentional
                _r = this.rand(0, _elen-1);
                _itm = elements[_r]; // item
                if (offset===-1) {
                    // unique draw
                    if (typeof _past[_itm] === 'undefined') {
                        draw.push(_itm);
                        _past[_itm] = draw.length; // current pointer
                    } else {
                        ++_idle;
                    }
                } else {
                    // non-unique with assumed offset
                    if (typeof _past[_itm] === 'undefined' || typeof _past[_itm] !== 'undefined' && (_past[_itm]+offset-1)<draw.length+1) {
                        draw.push(_itm);
                        _past[_itm] = draw.length; // current pointer
                    } else {
                        ++_idle;
                    }
                }
            }

            return draw; // populated

        } catch (err) {
            this.errors.push({
                message: err.message,
                input: _input,
                object: err
            });
            //console.log(this.errors);
            return draw; // empty
        }
    };


    this.rand = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max)+1;
        return Math.floor(Math.random() * (max - min)) + min;
    };


    this.toInt = function(input) {
        try {
            if (typeof input !== 'number') throw new Error('Not a valid number defining length');
            return Math.floor(parseInt(input));
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
