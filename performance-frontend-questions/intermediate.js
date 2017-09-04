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

    //merge sort : [easie|b]est sort
    static sort(arr) {
        if(arr.length <= 1) {
            return arr;
        }

        let firstHalf = arr.slice(0, Math.floor(arr.length / 2));
        let secondHalf = arr.slice(Math.floor(arr.length / 2), arr.length);

        firstHalf = this.sort(firstHalf);
        secondHalf = this.sort(secondHalf);

        let index1 = 0, index2 = 0;
        let result = [];
        while(index1 < firstHalf.length && index2 < secondHalf.length) {
            if(firstHalf[index1] < secondHalf[index2]) {
                result.push(firstHalf[index1++]);
            } else {
                result.push(secondHalf[index2++]);
            }
        }
        if(index1 < firstHalf.length) {
            result = result.concat(firstHalf.slice(index1, firstHalf.length));
        } else {
            result = result.concat(secondHalf.slice(index2, secondHalf.length));
        }

        return result;
    }

    //should do this in a non-destructive manner with indexes
    static includes(arr, val) {
        let index;
        while(arr.length > 0) {
            index = Math.floor(arr.length / 2);
            if (val === arr[index]) {
                return true;
            } else if (val < arr[index]) {
                arr = arr.slice(0, Math.floor(arr.length / 2));
            } else {
                arr = arr.slice(Math.floor(arr.length / 2) + 1, arr.length);
            }
        }
        return false;
    }

    // For the sake of simplicity, you can assume that objects can contain only numbers and other objects (and not arrays, functions, etc.).
    static assignDeep(val1, val2) {
        for(let key in val2) {
            if(!val2.hasOwnProperty(key)) {
                continue;
            }
            if(val1[key] && typeof(val1[key]) === 'object') {
                val1[key] == this.assignDeep(val1[key], val2[key]);
            } else {
                val1[key] = val2[key];
            }
        }
        return val1;
    }

    /// arr is an array of promises
    /// func is the function to process
    /// val is the start val to which the processed values from arr must be appended
    static async reduceAsync(arr, func, val) {
        for(let item of arr) {
            val = func(val, await item());
        }
        return val;
    }

}

module.exports = Intermediate;