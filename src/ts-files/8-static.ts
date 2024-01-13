//TypeScript (and JavaScript) don’t have a construct called static class the same way as, 
//for example, C# does.


// Unnecessary "static" class
class MyStaticClass {
    static doSomething() { }
}

// Preferred (alternative 1)
function doSomething() { }

// Preferred (alternative 2)
const MyHelperObject = {
    dosomething() { },
};
