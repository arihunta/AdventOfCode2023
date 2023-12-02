const assert = require('assert');
const day01_01 = require("../src/day01");
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
});