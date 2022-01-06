// The reduce() method executes a reducer function (that you provide) on each element of the Array, resulting in single output value. 
// the reducer function takes four arguments:

// accumulator
// current value 
// current index 
// source array 

let arr = [1,2,3,4,5,6];

// using For loop 

let loopTotal = 0;
for(let element of arr){
    loopTotal += element;
}
console.log('Using Loops')
console.log(loopTotal)



// using Map 
let total = 0;
let newarr = arr.map((cureentElement)=>{
    total += cureentElement;
})

console.log('Using Maping')
console.log(total)


// using Reduce 

let newArr = arr.reduce((accum,element)=>{
    // console.log(accum)
    debugger;
    return accum += element; // remember kuch . 

}) // 2 is initial value of accumulator . 
console.log(newArr)


// how to average 

let array = [5,31,3,5]
let newArr2 = array.reduce((accum,element)=>{
    return accum+element
},2)
console.log(newArr2 / array.length)


// 2nd 


let average = array.reduce((accum,element,index,array)=>{
    let total = accum+=element;
    if(index === array.length - 1){
        return total / array.length;
    }
    return total
})

console.log(average)


