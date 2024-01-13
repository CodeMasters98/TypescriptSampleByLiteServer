"use strict";
//callback function in js
function addWithCallbackJs(num1, num2, cb) {
    const result = num1 + num2;
    cb(result);
}
addWithCallbackJs(10, 15, (result) => { console.log(result); });
//callback function in Ts
function addWithCallbackTs(num1, num2, cb) {
    const result = num1 + num2;
    cb(result);
}
addWithCallbackTs(10, 15, (result) => { console.log(result); });
