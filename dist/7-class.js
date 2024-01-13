"use strict";
class User {
    // firstName: string
    // lastName: string
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class Student extends User {
    constructor(firstName, lastName, age) {
        //Super must be befor asigning to other value
        super(firstName, lastName);
        if (age)
            this._age = age;
    }
    check(item) {
        if (item.age > 18 && this.firstName && this.lastName)
            return true;
        else
            return false;
    }
    //If get exists but no set, the property is automatically readonly
    get fullName() {
        return `Student: ${this.firstName} ${this.lastName}`;
    }
    get age() {
        return this._age;
    }
    //If the type of the setter parameter is not specified, it is inferred from the return type of the getter
    set age(value) {
        if (value >= 18)
            this._age = value;
        else
            console.log("Age must be 18 or older");
    }
}
class Master extends User {
    constructor(firstName, lastName, certificate) {
        super(firstName, lastName);
        this.secretKey = "alskmdkalsdm";
    }
    get fullName() {
        return `Master: ${this.firstName} ${this.lastName}`;
    }
}
let p = new Student("Parham", "Darvishi");
console.log(p.fullName);
// The order of class initialization, as defined by JavaScript, is:
// The base class fields are initialized
// The base class constructor runs
// The derived class fields are initialized
// The derived class constructor runs
