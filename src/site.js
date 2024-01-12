console.log("Hello from Ts");
//Without TS
function add(num1, num2) {
    return num1 + num2;
}
console.log(add('5', 6));
function add2(num1, num2) {
    return num1 + num2;
}
//Part 02
//Runtime Error In JS
function add_RuntimeError(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number')
        throw new Error('Invalid Types');
    return num1 + num2;
}
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
})(Gender || (Gender = {}));
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
})(Role || (Role = {}));
//export enum Role{ADMIN,READ_ONLY}
//Create Object in TS
var person = {
    firstName: 'Parham',
    lastName: 'Darvishi',
    age: 27,
};
console.log(person.age);
