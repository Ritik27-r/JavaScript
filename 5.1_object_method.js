function sayMyName(){
        console.log(this.fname+" "+this.lname) 
        //this keyword is an object and points to the object it belongs to
    }
var person = {
    fname: "Ritik",
    lname: "Rawat",
    age: 23,
    sayMyName : sayMyName,
    sayMyAge : ()=>{
        console.log(this.age)
        //Arrow function do NOT bind their own this
    }
}
var person1 = {
    fname: "Umesh",
    lname: "Rawat",
    age: 22,
    sayMyName : sayMyName
}
var person2 = {
    fname: "Md Amaan",
    lname: "Saifi",
    age: 22,
    sayMyName : sayMyName
}
person.sayMyName()
person1.sayMyName()
person2.sayMyName()
person.sayMyAge()
console.log(this)
//This will print cause the value is at window and this keyword is pointing at window as stated by previous line
age=456  
person.sayMyAge()