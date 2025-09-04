async function greet() {
    return "Ritik"
}
var a = greet()
async function hello() {
    console.log("before")
    var result = await a;
    console.log(result);
    console.log("after")
}
console.log("1")
hello()
console.log("2")

// a.then((result)=>{
//     console.log(result)
// })
