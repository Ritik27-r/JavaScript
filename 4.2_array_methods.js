var a=[1,2,3,4,5,6,7];

//map()-looping method
// 1.)
var a1 =a.map(function(item,index){
    return item*item;
})
console.log(a1);
// 2.)
console.log(a.map(x=>x*2));


//filter()
var a2 = a.filter((item,index)=>{
    return item>3
})
console.log(a2);


//reduce()
var sum = a.reduce(function(total,item,index){
    return total +=item;
},10)//10 is the intial value here but not necessary
console.log(sum);


//sort()
var a = [23,56,22,45,77,11,34,5];
var arr1=a.sort((a,b)=>{
    return a-b
}
)
console.log(arr1)


//find()
var a3 =a.find((item,index)=>{
    return item%2 == 0
}
)
console.log(a3)


//findIndex()
var a4 = a.findIndex((item,index)=>{
    return item%2 ==0
}
)
console.log(a4);


//every() - return boolean
var a6 = a.every((item,index)=>{
    return item>5;
}
)
console.log(a6)


//some() - return boolean
var a5 = a.some((item,index)=>{
    return item>5;
}
)
console.log(a5);


//join - array to string & split - string to array
var a7 =  ["H","e","l","l","o"];
var str = a7.join()
console.log(str)
var str = a7.join("")
console.log(str)

var arr = str.split()
console.log(arr)
var arr = str.split("")
console.log(arr)


//concat
var b1=[1,2,3]
var b2=[4,5,6]
var b3=[7,8,9]
var a8 = b1.concat(b2)
console.log(a8)
var a8 = b1.concat(b2,b3) // or [].concat(b1,b2,b3)
console.log(a8)


//flat
var b4 = [[1,2,3],[4,[[5]],6],[7,8,[9]]]
var a9 = b4.flat()
console.log(a9)
var a9 = b4.flat(Infinity)
console.log(a9)