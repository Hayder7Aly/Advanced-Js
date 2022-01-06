// What is spread Operator ? 

//   Spread Operator allows an iterable to expand in places where 0 + argument  are expected. it is moslty used in variable array where there is more than 1 values are expeced . it allows us the privilege to obtain a list of parameters from an array . Syntax of Spread Operator in same as Rest Parameter but it works completely opposite of it .


function sum(a,b,c,d,e){
    console.log(a+b+c+d+e)
}
// sum(1,2,3)

let arr = [1,2,3,5,6];

// console.log(...arr)

sum.apply(null,arr); // null means that i cannot apply but only pass the argument to the function .
sum(...arr)




console.log('\n\n\n')

let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [7,8,9]
// arr1 = arr1.concat(arr2)
// arr1 = [...arr1 , ...arr2]
arr1 = [...arr1 , ...arr2,...arr3 , 10]


console.log(arr1)


console.log('\n\n\n')

let arrc1 = [1,2,3]
let arrc2 = arrc1;
arrc1.push(4)
console.log(arrc1,arrc2);





