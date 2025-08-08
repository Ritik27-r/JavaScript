var a=[1,2,3,4,5];

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
var arr = [23,56,22,45,77,11,34,5];
var arr1=arr.sort((a,b)=>{
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


//every()


//some()
