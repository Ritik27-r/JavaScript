var a =20;
if(a > 10) {
    console.log("a is greater than 10");
}else {
    console.log("a is not greater than 10");
}

console.log(a>20?"true":"false");


var day = 1;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

//loops
// for (let i = 0; i < 5; i++) {
//     console.log("Iteration: " + i);
// }   
// console.log("Loop completed");
// let j = 0;
// while (j < 5) {
//     j++;
//     console.log("While loop iteration: " + j);
// }
// console.log("While loop completed");
// let k = 0;
// do {
//     console.log("Do-while loop iteration: " + k);
//     k++;
// } while (k < 5);
// console.log("Do-while loop completed");

//functions
// function greet(name) {
//     console.log("Hello, " + name + "!");
// }
// greet("Alice"); // Hello, Alice!
const add = (a, b) => a + b;
console.log(add(5, 10)); // 15 

function Hello(){
    console.log("Hello , welcome to JavaScript!");
}
function greet(a,b){
    console.log(a);
    b();
}
greet("greeting",Hello);

//anonymous function
(function() {console.log("This is an anonymous function");})();
// Immediately Invoked Function Expression (IIFE)
(()=> {});