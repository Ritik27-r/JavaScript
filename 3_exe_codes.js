//Below is an example of Hoisting in JavaScript
//JS moves all variable and function declarations to the top of their containing scope during the compile phase.
//This means that you can use variables and functions before they are declared in the code.
console.log(a);
var a = 20;
greet();
function greet() {
    console.log("Hello, World!");
}
//What gets hoisted?
/*
1.) Functions decklarations are hoisted completely, meaning you can call them before they are defined in the code.
2.) Var declarations are hoisted, but their initialization is not. This means that if you try to access a variable before it is initialized, it will be undefined.
3.)let and const are hoisted but in temoprl dead zone.
 Let and const declarations are not hoisted in the same way as var. They are hoisted to the top of their block scope, but they are not initialized until the line of code where they are defined is executed. This means that if you try to access a let or const variable before it is defined, you will get a ReferenceError.
*/