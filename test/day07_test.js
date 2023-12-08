const assert = require('assert');
const { day07_01, day07_02 } = require("../src/day07");
const { readFileSync } = require('fs');

describe('Day 07', function () {
    describe('Problem 01', function () {

        it('solve example 01', function () {
            assert.equal(day07_01(readFileSync('./data/07_01', 'utf8')), 6440);
        });

        it('solve the problem', function () {
            assert.equal(day07_01(readFileSync('./data/07', 'utf8')), 250474325);
        });

    });

    describe('Problem 02', function () {

        it('solve example 02', function () {
            assert.equal(day07_02(readFileSync('./data/07_01', 'utf8')), 5905);
        });

        it('solve the problem', function () {
            assert.equal(day07_02(readFileSync('./data/07', 'utf8')), 248909434);
        });

    });
});