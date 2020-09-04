'use strict';
//TASK1
 var myGlobal = 10; //global variable declared using var keyword
 let oopsGlobal = 0;

function fun1() {
    return oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal !== "undefined") {
       output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal !== "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

    fun1();
    fun2();
    
//TASK2
function myLocalScope() {
    let myVar = 0; //this variable seen only inside the function myLocalScope!
    console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('outside myLocalScope', myVar);