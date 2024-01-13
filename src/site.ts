console.log("Hello from Ts");


//Without TS
function add(num1, num2) {
    return num1 + num2;
}
console.log(add('5', 6));


//ReturnType in function
function add2(num1: number, num2: number): number {
    return num1 + num2;
}

//ReturnType in function
function showMessage(title: string): void {
    console.log(title)
}

//Part 02
//Runtime Error In JS
function add_RuntimeError(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number')
        throw new Error('Invalid Types');
    return num1 + num2;
}

export enum Gender { MALE, FEMALE }
export enum Role { ADMIN, READ_ONLY }
//export enum Role{ADMIN,READ_ONLY}

//Create Object in TS
var person: {
    firstName: string,
    lastName: string,
    age: number,
    gender: Gender
} = {
    firstName: 'Parham',
    lastName: 'Darvishi',
    age: 27,
    gender: Gender.MALE
}
console.log(person.age);


//Array in Ts
let activeDiscount: string[]
activeDiscount = ["Item1", "Item2"]
for (let index = 0; index < activeDiscount.length; index++) {
    console.log(activeDiscount[index].toUpperCase())
}

//any
let products: any
products = ["Product1", true, 0]

//tuple
const product:{
    title:string,
    price:number,
    tags:string[],
    category:[number,string]
}  = {
    title:"Test",
    price:5000,
    tags:['free','test'],
    category:[1,'meet']
}


//Other Type
let obj1: string | number;


//Literal Types
type Easing = "ease-in" | "ease-out" | "ease-in-out";

//callback function in js
function addWithCallbackJs(num1:number,num2:number,cb){
    const result = num1 + num2;
    cb(result);
}

addWithCallbackJs(10,15,(result) => {console.log(result)});

//callback function in Ts
function addWithCallbackTs(num1:number,num2:number,cb: (num:number) => void){
    const result = num1 + num2;
    cb(result);
}
addWithCallbackTs(10,15,(result) => {console.log(result)});

//Unknown Type
let inputFromUser: unknown
inputFromUser = "2"
inputFromUser = 2
