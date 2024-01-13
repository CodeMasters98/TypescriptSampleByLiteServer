"use strict";
// Named function
function add(x, y) {
    return x + y;
}
// Anonymous function
let myAdd = function (x, y) {
    return x + y;
};
//Function Type
let myAdd2 = function (x, y) {
    return x + y;
};
//ReturnType in function
function showMessage(title) {
    console.log(title);
}
//optional param
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
//default param
function buildName2(firstName, lastName = "Smith") {
    // ...
}
