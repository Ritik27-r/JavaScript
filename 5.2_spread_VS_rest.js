//Spread-Destructuring
var person = {
    fname: "Ritik",
    lname: "Rawat"
}
var person1 = {
    ...person,
    age: 22
}
console.log(person)
console.log(person1)

var DataBase =[1,4,5];//Example
function add(a,b,c){
    console.log(a+b+c)
}
add(...DataBase);
console.log()

//Rest
console.log("Rest")
function ad(...num){
    console.log(num)
}
ad(1,2,3,4,5,6,7,8,9,0)