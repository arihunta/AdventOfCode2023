const assert = require('assert');
const { day05_01, day05_02 } = require("../src/day05");
const { readFileSync } = require('fs');

describe('Day 05', function () {
    describe('Problem 01', function () {

        it('solve example 01', function () {
            assert.equal(day05_01(readFileSync('./data/05_01', 'utf8')), 35);
        });

        it('solve the problem', function () {
            assert.equal(day05_01(readFileSync('./data/05', 'utf8')), 457535844);
        });

    });

    describe('Problem 02', function () {

        it('solve example 02', function () {
            assert.equal(day05_02(readFileSync('./data/05_01', 'utf8')), 46);
        });

        // skip slow solution
        it.skip('solve the problem', function () {
            assert.equal(day05_02(readFileSync('./data/05', 'utf8')), 41222968);
        });

    });
});