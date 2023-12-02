const assert = require('assert');
const { day01_01, day01_02 } = require("../src/day01");
const { readFileSync } = require('fs');

describe('Day 01', function () {
    describe('Problem 01', function () {

        it('solve example 01', function () {
            assert.equal(day01_01(readFileSync('./data/01_01', 'utf8')), 142);
        });

        it('solve the problem', function () {
            assert.equal(day01_01(readFileSync('./data/01', 'utf8')), 54927);
        });

    });

    describe('Problem 02', function () {

        it('solve example 02', function () {
            assert.equal(day01_02(readFileSync('./data/01_02', 'utf8')), 281);
        });

        it('solve the problem', function () {
            assert.equal(day01_02(readFileSync('./data/01', 'utf8')), 54581);
        });

    });
});