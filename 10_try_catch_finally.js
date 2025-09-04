try {
    var l = 10
    console.log(l)
    throw new Error("Random error")
} catch (error) {
    console.log(error.message) 
} finally {
    console.log("finally")
}