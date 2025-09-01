// var arr = [1, 2, 3, 4, 5];
// for (let i of arr) {
//     console.log(i)
// }

//Enumerable- visible in loop
var person = {
    fname: "Ritik", 
    lname: "Rawat", 
    age: 23
}
// for (let key in person) {
//     console.log(person[key])
// }  

var entries = Object.entries(person)
console.log(entries)

Object.defineProperty(person,"lname",{
    value:"Dar",
    enumerable:false
})
// var a = Object.getOwnPropertyDescriptors(person) //to read property descriptors
// console.log(a)

// var myKeys = Object.keys(person)
// console.log(myKeys)//Won't show lname as enumerablity is false by force above

// var myValues = Object.values(person)
// console.log(myValues)

var entries = Object.entries(person)
console.log(entries) //lname is shown above because enumerability is changed afterwards

var obj = Object.fromEntries(entries)//Converts the array into object(key:value pair)
console.log(obj)

// var a = Object.hasOwn(person,"fname")//used on object instance
// console.log(a)

// var b = person.hasOwnProperty("lname")//used on object itself
// console.log(b)

// var c = Object.getOwnPropertyNames(person)
// console.log(c)

var d = person.propertyIsEnumerable('lname')
console.log(d)
