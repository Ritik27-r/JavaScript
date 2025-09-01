function greet(age,city){
    console.log(`My name is ${this.name} and my age is ${age} and i am from ${city}.`)
}
greet(23,"Faridabad")

const person = {
    name:"Ritik"
}

greet.call(person,23,"Faridabad")

greet.apply(person,[23,"Faridabad"])

const newGreet = greet.bind(person,23,"Faridabad")
newGreet()