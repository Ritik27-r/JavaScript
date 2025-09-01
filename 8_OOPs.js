// var user = {
//     fname:"Ritik",
//     lname:"Rawat",
//     age:23,
//     getFullname : function(){
//         return user.fname+" "+user.lname
//     },
//     getAgeYear : function(){
//         return new Date().getFullYear()-user.age;
//     }
// }

const { _get } = require("prompt");


//Factory function
// function createUser(firstName,lastName,age) {
//     const user = {
//         fname: firstName,
//         lname: lastName,
//         age: age,
//         getFullname: function () {
//             return user.fname + " " + user.lname
//         },
//         getAgeYear: function () {
//             return new Date().getFullYear() - user.age;
//         }
//     }
//     return user;
// }


// function createUser(firstName, lastName, age) {
//     const user = {
//         fname: firstName,
//         lname: lastName,
//         age: age,
//         getFullname: createUser.prototype.getFullname,
//         getAgeYear: createUser.prototype.getAgeYear
//     }
//     return user;
// }
// createUser.prototype.getFullname = function () {
//     return this.fname + " " + this.lname
// }
// createUser.prototype.getAgeYear = function () {
//     return new Date().getFullYear() - user.age;
// }
// const user1 = createUser("Ritik", "Rawat", 23);
// const user2 = createUser("Umesh", "Thakur", 22);
// console.log(user1.getAgeYear === user2.getAgeYear)


// function createUser(firstName, lastName, age) {
//     this.fname = firstName,
//         this.lname = lastName,
//         this.age = age
// }
// createUser.prototype.getFullname = function () {
//     return this.fname + " " + this.lname
// }
// createUser.prototype.getAgeYear = function () {
//     return new Date().getFullYear() - user.age;
// }
// const user1 = new createUser("Ritik", "Rawat", 23);
// const user2 = new createUser("Umesh", "Thakur", 22);


// class createUser{
//     constructor(firstName, lastName, age){
//         this.fname = firstName,
//         this.lname = lastName,
//         this.age = age
//     }
//     getFullname(){
//         return this.fname + " " + this.lname;
//     }
//     getAgeYear(){
//         return new Date().getFullYear() - this.age;
//     }
// }
// const user1 = new createUser("Ritik", "Rawat", 23)
// const age = user1.getAgeYear()


//super keyword
//inheritance
// class Parent{
//     constructor(fname){
//         this.firstName = fname;
//         console.log("Parent constructor")
//     }
//     info(){
//         console.log("Rawat")
//     }
// }
// class Child extends Parent{
//     constructor(x,y) {
//         super()
//         this.x = x;
//         this.y = y;        
//     }
//     info(){
//         super.info()
//         console.log(this.x)
//     }
// }
// const person1 = new Child("Ritik","R","4")


//prototype vs __proto__
function createUser(firstName, lastName, age) {
    this.fname = firstName,
        this.lname = lastName,
        this.age = age
}
createUser.prototype.getFullname = function () {
    return this.fname + " " + this.lname
}
createUser.prototype.getAgeYear = function () {
    return new Date().getFullYear() - user.age;
}
const user1 = new createUser("Ritik", "Rawat", 23);
console.log((user1.__proto__)===(createUser.proto))
console.log((user1.__proto__)===(createUser.prototype))


const gParent = {
    fname:"Maqbool"
}
const parent = {
    __proto__:gParent,
    lname:"Rasheed"
}
const child = {
    __proto__:parent,
    city:"Hajin"
}
console.log(child.fname+" "+child.lname+" "+child.city)