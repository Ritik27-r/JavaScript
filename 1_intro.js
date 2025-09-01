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


/*operators*/

// JavaScript supports various operators, including:
// 1. Arithmetic Operators: +, -, *, /, %, ++, --
let x = 10;
let y = 5;
console.log(x + y); // 15
console.log(x - y); // 5
console.log(x * y); // 50
console.log(x / y); // 2
console.log(x % y); // 0

// 2. Unary Operators: + (unary plus), - (unary minus), ++ (increment), -- (decrement)
console.log(+x); // 10 (unary plus, no effect on number)
console.log(-x); // -10 (unary minus, negates the number)
console.log(x++); // 10 (post-increment)
console.log(x); // 11 (x is now incremented)
console.log(++y); // 6 (pre-increment, y is now incremented)
console.log(y--); // 6 (post-decrement)
console.log(y); // 5 (y is now decremented)

// 3. Assignment Operators: =, +=, -=, *=, /=, %=
let z = 10;
z += 5; // z = z + 5
console.log(z); // 15
z -= 3; // z = z - 3
console.log(z); // 12
z *= 2; // z = z * 2
console.log(z); // 24
z /= 4; // z = z / 4
console.log(z); // 6
z %= 2; // z = z % 2
console.log(z); // 0 (remainder of 6 divided by 2)
console.log(40*"5"); // 200 type coercion (string '5' is converted to number 5)
console.log(40*parseInt("5")); // 200 type conversion (string '5' is explicitly converted to number 5)


// 4. Comparison Operators: ==, ===, !=, !==, <, >, <=, >=
console.log(5 == '5'); // true (loose equality, type coercion)
console.log(5 === '5'); // false (strict equality, no type coercion)
console.log(5 != '5'); // false (loose inequality, type coercion)
console.log(5 !== '5'); // true (strict inequality, no type coercion)
console.log(10 < 20); // true
console.log(10 > 20); // false
console.log(10 <= 10); // true
console.log(10 >= 5); // true

// 5. Logical Operators: &&, ||, !
let a1 = true;
let b1 = false;
console.log(a1 && b1); // false (logical AND)
console.log(a1 || b1); // true (logical OR)
console.log(!a1); // false (logical NOT)

// 6. Bitwise Operators: &, |, ^, ~, <<, >>
let a2 = 5; // 0101 in binary
let b2 = 3; // 0011 in binary
console.log(a2 & b2); // 1 (0001 in binary, bitwise AND)
console.log(a2 | b2); // 7 (0111 in binary, bitwise OR)
console.log(a2 ^ b2); // 6 (0110 in binary, bitwise XOR)
console.log(~a2); // -6 (bitwise NOT, flips bits)
console.log(a2 << 1); // 10 (1010 in binary, left shift)
console.log(a2 >> 1); // 2 (0010 in binary, right shift)

// 7. Ternary Operator: condition ? expr1 : expr2
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes"

// 8. Typeof Operator: typeof
console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof null); // "object" (this is a known JavaScript quirk)
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol("unique")); // "symbol"
console.log(typeof BigInt(123)); // "bigint"

// 9. Instanceof Operator: checks if an object is an instance of a specific class
class Person {}
let person = new Person();
console.log(person instanceof Person); // true
console.log(person instanceof Object); // true (all objects are instances of Object)

