//bool
let flag: boolean = false;

//number
let age: number = 6;

//string
let firstName: string = "Parham";

//array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]; //In generic way

//tuple type
let x: [string, number];
x = ["hello", 10];


//enum type
export enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green;

//unknown
let userInput: unknown;
userInput = 4;

//Other Type
let obj1: string | number;

//Literal Types
type Easing = "ease-in" | "ease-out" | "ease-in-out";