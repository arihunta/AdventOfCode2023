const assert = require('assert');
const { day03_01, day03_02 } = require("../src/day03");
const { readFileSync } = require('fs');

describe('Day 03', function () {
    describe('Problem 01', function () {

        it('solve example 01', function () {
            assert.equal(day03_01(readFileSync('./data/03_01', 'utf8')), 4361);
        });

        it('solve the problem', function () {
            assert.equal(day03_01(readFileSync('./data/03', 'utf8')), 539433);
        });

    });

    describe('Problem 02', function () {

        it('solve example 02', function () {
            assert.equal(day03_02(readFileSync('./data/03_01', 'utf8')), 467835);
        });

        it('solve the problem', function () {
            assert.equal(day03_02(readFileSync('./data/03', 'utf8')), 75847567);
        });

    });
});