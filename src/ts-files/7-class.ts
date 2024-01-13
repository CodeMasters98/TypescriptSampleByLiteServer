//change flag strictPropertyInitialization on tsconfig
interface Checkable<T> {
    check(item: T): boolean;
}

abstract class User {
    // firstName: string
    // lastName: string

    constructor(protected firstName: string, protected lastName: string) { }

    abstract get fullName(): string;
}

class Student extends User implements Checkable<Student> {

    private _age: number;

    constructor(firstName: string, lastName: string, age?: number) {
        //Super must be befor asigning to other value
        super(firstName, lastName);

        if (age)
            this._age = age;
    }

    check(item: Student): boolean {
        if (item.age > 18 && this.firstName && this.lastName)
            return true;
        else
            return false;
    }


    //If get exists but no set, the property is automatically readonly
    get fullName(): string {
        return `Student: ${this.firstName} ${this.lastName}`
    }

    get age(): number {
        return this._age;
    }

    //If the type of the setter parameter is not specified, it is inferred from the return type of the getter
    set age(value: number) {
        if (value >= 18)
            this._age = value;
        else
            console.log("Age must be 18 or older");
    }

}

class Master extends User {

    private secretKey: string = "alskmdkalsdm";

    constructor(firstName: string, lastName: string, certificate: string) {
        super(firstName, lastName)
    }

    get fullName(): string {
        return `Master: ${this.firstName} ${this.lastName}`
    }
}

let p = new Student("Parham", "Darvishi")
console.log(p.fullName);

// The order of class initialization, as defined by JavaScript, is:
// The base class fields are initialized
// The base class constructor runs
// The derived class fields are initialized
// The derived class constructor runs