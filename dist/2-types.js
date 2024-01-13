"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
//bool
let flag = false;
//number
let age = 6;
//string
let firstName = "Parham";
//array
let list = [1, 2, 3];
let list2 = [1, 2, 3]; //In generic way
//tuple type
let x;
x = ["hello", 10];
//enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (exports.Color = Color = {}));
let c = Color.Green;
//unknown
let userInput;
userInput = 4;
//Other Type
let obj1;
