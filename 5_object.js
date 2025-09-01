// Obects are collections of key-value pairs used to represent structured data
var person = {
    fname: "Ritik",
    lname: "Rawat",
    age: 23,
    isMarried: false,
    city: {
        name:"Kashmir",
        location:"North",
        area:123654,
        place:{
            place1:"Gulmarg",
            place2:"Pahalgam"
        }
    }
}  // string(key):value(any data type)
// console.log(person)
// console.log(person.fname)
// console.log(person["age"])
// person.height=6.5
// console.log(person.height)
// person.city = "Faridabad"
// console.log(person.city)
console.log(person.city.place.place2)

var city="gg"
var person = {
    fname: "Ritik",
    lname: "Rawat",
    age: 23,
    city:city
}
// var person1 ={
//     ...person
// }
// console.log(person1)
var person2 = Object.assign({},{a:1,b:2,c:3,person})
console.log(person2)

var person2 = Object.assign({},{a:1,b:2,c:3,...person})
console.log(person2)