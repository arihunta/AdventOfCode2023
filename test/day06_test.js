const assert = require('assert');
const { day06_01, day06_02 } = require("../src/day06");
const { readFileSync } = require('fs');

describe('Day 06', function () {
    describe('Problem 01', function () {

        it('solve example 01', function () {
            assert.equal(day06_01(readFileSync('./data/06_01', 'utf8')), 288);
        });

        it('solve the problem', function () {
            assert.equal(day06_01(readFileSync('./data/06', 'utf8')), 3316275);
        });

    });

    describe('Problem 02', function () {

        it('solve example 02', function () {
            assert.equal(day06_02(readFileSync('./data/06_01', 'utf8')), 71503);
        });

        it('solve the problem', function () {
            assert.equal(day06_02(readFileSync('./data/06', 'utf8')), 27102791);
        });

    });
});