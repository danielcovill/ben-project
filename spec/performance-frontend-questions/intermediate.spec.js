"use strict";
var Intermediate = require('../../performance-frontend-questions/intermediate');

describe('Intermediate challenge questions from https://performancejs.com/post/hde6d32/The-Best-Frontend-JavaScript-Interview-Questions-(Written-by-a-Frontend-Engineer)', function () {

    it('finds the fibonacci value for a given sequence number', function () {
        expect(Intermediate.fib2(0)).toEqual(0);
        expect(Intermediate.fib2(1)).toEqual(1);
        expect(Intermediate.fib2(10)).toEqual(55);
        //removed because of time limitations
        //expect(Intermediate.fib2(50)).toEqual(12586269025);
    });

    it('finds the fibonacci value for a given sequence number, but better', function () {
        expect(Intermediate.fib2_2(0)).toEqual(0);
        expect(Intermediate.fib2_2(1)).toEqual(1);
        expect(Intermediate.fib2_2(10)).toEqual(55);
        expect(Intermediate.fib2_2(50)).toEqual(12586269025);
    });

    it('determines if brackets in a string are balanced', function () {
        expect(Intermediate.isBalanced2('(foo { bar (baz) [boo] })')).toEqual(true);
        expect(Intermediate.isBalanced2('foo { bar { baz }')).toEqual(false);
        expect(Intermediate.isBalanced2('foo { (bar [baz] } )')).toEqual(false);
    });

    it('returns the unique numbers from an array', function () {
        expect(Intermediate.uniq([])).toEqual([]);
        expect(Intermediate.uniq([1, 4, 2, 2, 3, 4, 8])).toEqual([1, 4, 2, 3, 8]);
    });

    it('returns the intersection of two arrays as an array', function () {
        expect(Intermediate.intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])).toEqual([4, 1]);
        expect(Intermediate.intersection([1, 5, 4, 2], [7, 12])).toEqual([]);
    });

    it('sorts the array', function () {
        expect(Intermediate.sort([])).toEqual([]);
        expect(Intermediate.sort([-4, 1, Infinity, 3, 3, 0])).toEqual([-4, 0, 1, 3, 3, Infinity]);
    });
});
