"use strict";
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
//Create Object in TS
var person = {
    firstName: 'Parham',
    lastName: 'Darvishi',
    age: 27,
    gender: Gender.MALE
};
console.log(person.age);
