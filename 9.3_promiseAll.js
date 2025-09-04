const promise1 = new Promise((resolve, reject) => setTimeout(() => { resolve("promise1") }, 1000))
const promise2 = new Promise((resolve, reject) => setTimeout(() => { resolve("promise2") }, 2000))
const promise3 = new Promise((resolve, reject) => setTimeout(() => { resolve("promise3") }, 3000))

Promise.all([promise1, promise2, promise3]).then((result) => {
    console.log("success")
    console.log(result)
}).catch((err) => {
    console.log(err)
})