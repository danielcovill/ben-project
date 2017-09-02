"use strict";

class Intermediate {

    static fib2(input) {
        if(input < 2) {
            return input;
        }
        return this.fib2(input - 1) + this.fib2(input - 2);
    }

    static fib2_2(input) {
        if(input < 2) {
            return input;
        }
        let result = 0;
        let prev1 = 0;
        let prev2 = 1
        for(let i=2;i<=input;i++) {
        result = prev1 + prev2;
        prev1 = prev2;
        prev2 = result; 
        }
        return result;
    }

    static isBalanced2(input) {
        let tracking = [];
        for(let i=0;i<input.length;i++) {
            switch(input.charAt(i)) {
                case '{':
                    tracking.push('{');
                    break;
                case '[':
                    tracking.push('[');
                    break;
                case '(':
                    tracking.push('(');
                    break;
                case '}':
                    if(tracking.pop() !== '{')
                        return false;
                    break;
                case ']':
                    if(tracking.pop() !== '[')
                        return false;
                    break;
                case ')':
                    if(tracking.pop() !== '(')
                        return false;
                    break;
                default:
                    break;
            }
        }
        return tracking.length === 0;
    }

    //I cheated on this one but the solution was too clever to turn down
    static uniq(input) {
        return input.filter((val, index, arr) => { return arr.indexOf(val) === index; });
    }

    static intersection(arr1, arr2) {
        let set = {};
        let result = [];
        for(let i=0;i<arr1.length;i++){
            set[arr1[i]] = 1;
        }
        for(let i=0;i<arr1.length;i++){
            if(set[arr2[i]]) {
                result.push(arr2[i]);
            }
        }
        return result;
    }

    static sort(arr) {

    }

}

module.exports = Intermediate;