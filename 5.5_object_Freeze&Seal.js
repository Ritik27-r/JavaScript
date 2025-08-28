var person={
    fname: "Ritik",
    lname: "Rawat",
    age: 23
}
Object.freeze(person)
person.lname="Whatup"
console.log(person)//won't change because of freeze

Object.seal(person)//Seal won't let u delete or add but can modify
person.lname="Whatup"
console.log(person)

