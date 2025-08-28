//Shallow copy
var person = {
    fname: "Ritik", 
    lname: "Rawat", 
    age: 23,
    city:{
        name:"Faridabad"
    }
}
var person2 = person 
console.log(person==person2)
person2.age = 24 //both will change cause person2 is storing reference to person
console.log(person==person2)

//Deep copy
var person2 = {...person}
person2.age =24
console.log(person==person2)

person2.city.name = "Delhi"
console.log(person)
console.log(person2)