var person = {
    "fname": "Ritik", 
    "lname": "Rawat", 
    "age": 23
}

var jsonObj = JSON.stringify(person)
console.log(jsonObj)
var jsObj = JSON.parse(jsonObj)
console.log(jsObj)

var person2 = JSON.parse(JSON.stringify(person))
console.log(person2)