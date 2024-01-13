// Named function
function add(x: number, y: number): number {
    return x + y;
}

// Anonymous function
let myAdd = function (x: number, y: number): number {
    return x + y;
};

//Function Type
let myAdd2: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

//ReturnType in function
function showMessage(title: string): void {
    console.log(title)
}

//optional param
function buildName(firstName: string, lastName?: string) {
    if (lastName) return firstName + " " + lastName;
    else return firstName;
}

//default param
function buildName2(firstName: string, lastName = "Smith") {
    // ...
}