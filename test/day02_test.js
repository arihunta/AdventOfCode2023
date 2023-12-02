const assert = require('assert');
const { day02_01, day02_02 } = require("../src/day02");
const { readFileSync } = require('fs');

describe('Day 02', function () {
    describe('Problem 01', function () {

        it('solve example 01', function () {
            assert.equal(day02_01(readFileSync('./data/02_01', 'utf8')), 8);
        });

        it('solve the problem', function () {
            assert.equal(day02_01(readFileSync('./data/02', 'utf8')), 2505);
        });

    });

    describe('Problem 02', function () {

        it('solve example 01', function () {
            assert.equal(day02_02(readFileSync('./data/02_01', 'utf8')), 2286);
        });

        it('solve the problem', function () {
            assert.equal(day02_02(readFileSync('./data/02', 'utf8')), 70265);
        });

    });
});