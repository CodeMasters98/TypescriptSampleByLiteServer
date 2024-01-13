"use strict";
//Part 02
//Runtime Error In JS
function add_RuntimeError(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number')
        throw new Error('Invalid Types');
    return num1 + num2;
}
