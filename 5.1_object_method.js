var person = {
    fname: "Ritik",
    lname: "Rawat",
    age: 23,
    sayMyName: function(){
        return this.fname+" "+person.lname 
        //this keyword is an object and points to the object it belongs to
    }
}
console.log(person.sayMyName())