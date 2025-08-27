var arr = [1, 2, 3, 4, 5];
// for (let i of arr) {
//     console.log(i)
// }

//Enumerable- visible in loop
var obj = {
    fname: "Ritik", 
    lname: "Rawat", 
    age: 23
}
// for (let key in obj) {
//     console.log(obj[key])
// }  

Object.defineProperty(obj,"lname",{
    value:"Dar",
    enumerable:false
})
var a = Object.getOwnPropertyDescriptors(obj)
console.log(a)