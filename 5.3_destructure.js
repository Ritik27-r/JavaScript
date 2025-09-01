var person = {
    fname: "Ritik",
    lname: "Rawat",
    age: 22
}
var{fname,lname}=person//Destructuring from person which means i can call fname or lname direct with person.fname or person.lname
console.log(fname)


var arr =[1,2,3,4,5];
var [a,b,c]=arr;//[] used because it is an array
console.log(a,b,c)