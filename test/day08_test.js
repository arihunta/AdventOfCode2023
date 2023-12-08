const assert = require('assert');
const { day08_01, day08_02 } = require("../src/day08");
const { readFileSync } = require('fs');

describe('Day 08', function () {
    describe('Problem 01', function () {

        it.skip('solve example 01', function () {
            assert.equal(day08_01(readFileSync('./data/08_01', 'utf8')), 2);
        });

        it.skip('solve example 02', function () {
            assert.equal(day08_01(readFileSync('./data/08_01', 'utf8')), 6);
        });

        it.skip('solve the problem', function () {
            assert.equal(day08_01(readFileSync('./data/08', 'utf8')), 54927);
        });

    });

    describe('Problem 02', function () {

        it.skip('solve example 02', function () {
            assert.equal(day08_02(readFileSync('./data/08_02', 'utf8')), 281);
        });

        it.skip('solve the problem', function () {
            assert.equal(day08_02(readFileSync('./data/08', 'utf8')), 54581);
        });

    });
});