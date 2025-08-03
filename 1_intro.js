/*types of variables declaration in JavaScript*/

var a = 10;
let b = 20;
const c = 30;
console.log(a);
console.log(b);
console.log(c);



/*difference between var, let, and const*/

// var is function-scoped or globally scoped, can be redeclared and updated
// let is block-scoped, can be updated but not redeclared in the same scope
// const is block-scoped, cannot be updated or redeclared, must be initialized at declaration

var d =10;
console.log(d); 
var d =20; // can be redeclared
console.log(d); 
d=30;  // can be updated
console.log(d); 

let e = 10;
console.log(e);
// let e = 20; // cannot redeclare in the same scope, will throw an error
e = 20; // can update
console.log(e);

const f = 10;
console.log(f); 
// const f = 20; // cannot redeclare, will throw an error
// f = 20; // cannot update, will throw an error
console.log(f); // will still log 10



/* Static vs Dynamic Typing*/

// JavaScript is dynamically typed, meaning variable types can change at runtime
let a = 10; // a is a number
console.log(typeof a); // "number"
a = "Hello"; // a is now a string
console.log(typeof a); // "string"
//int a=10; in case of c ,java or c++ we have to declare the type of variable at the time of declaration
// in case of c, java or c++ we have to declare the type of variable at the time of declaration
// in case of javascript we can change the type of variable at runtime



/*types of data in JavaScript*/
// JavaScript has several data types, including:
// 1. Primitive types: Number, String, Boolean, Null, Undefined, Symbol, BigInt
let num = 42; 
console.log(typeof num); // "number" 
let str = "Hello";
console.log(typeof str); // "string"
let bool = true;
console.log(typeof bool); // "boolean"
let n;
console.log(typeof n); // "undefined" (n is declared but not initialized)
let obj = null;
console.log(typeof obj); // "object" (null is considered an object in JavaScript)
let sym = Symbol("unique");
console.log(typeof sym); // "symbol"
let bigIntNum = BigInt(1234567890123456789012345678901234567890);
console.log(typeof bigIntNum); // "bigint"