console.log("Hello from Ts");


//Without TS
function add(num1,num2){
    return num1 + num2;
}
console.log(add('5',6));

function add2(num1:number,num2:number): number {
    return  num1 + num2; 
}