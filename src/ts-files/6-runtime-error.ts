//Part 02
//Runtime Error In JS
function add_RuntimeError(num1:any, num2:any) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number')
        throw new Error('Invalid Types');
    return num1 + num2;
}