const promise = new Promise(function(resolve,reject){
    // resolve("Success")
    reject("Errorr")
})

promise.then(function(result){
    console.log("Ritik")
    console.log(result)
}).catch((err)=>{
    console.log(err)
})

// promise.then(function(result){
//     console.log("Ritik")
//     console.log(result)
// },function(err){
//     console.log("pw")
//     console.log(err)
// })