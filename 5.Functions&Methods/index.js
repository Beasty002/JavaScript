// Function is a block of code that performs a specific task and can be invoked whenever needed

// syntax : function functionName(){  some code };
// syntax : function functionName(parameter 1 , paramerter 2 , ............){  some code };
function func1() {
    console.log("Hello my friend");
}
func1();

function func2(name) {
    console.log(`hello my friend ${name}`);

}
func2("Beasty");


function func3(name, roll)//argument
{
    console.log(`hello my friend ${name} with roll number ${roll}`);

}
func3("Beasty", 19);


function sum(x, y) {
    return x + y;
    // you can return only one value;
    // anything below the return inside the function is not executed
    console("i am not executed");
}
let s = sum(3, 4);
console.log("the sum is " + s);
