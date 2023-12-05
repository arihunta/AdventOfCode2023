const assert = require('assert');
const { day04_01, day04_02 } = require("../src/day04");
const { readFileSync } = require('fs');

describe('Day 04', function () {
    describe('Problem 01', function () {

        it('solve example 01', function () {
            assert.equal(day04_01(readFileSync('./data/04_01', 'utf8')), 13);
        });

        it('solve the problem', function () {
            assert.equal(day04_01(readFileSync('./data/04', 'utf8')), 23941);
        });

    });

    describe('Problem 02', function () {

        it('solve example 02', function () {
            assert.equal(day04_02(readFileSync('./data/04_01', 'utf8')), 30);
        });

        it('solve the problem', function () {
            assert.equal(day04_02(readFileSync('./data/04', 'utf8')), 5571760);
        });

    });
});