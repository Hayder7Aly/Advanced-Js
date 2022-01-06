// Hositing in js is a mechanism where variables and function declaration are moved to the top of their scope before the code execution. 

// sum(23,1)
// function sum(a,b){
//     add = a+b;
//     console.log(add)
// }

// sum(5,2);



// Exception 

// (function sum(a,b){
//     add = a+b;
//     console.log(add)
// })

// sum(34,2)


// In function expression and fat arrow function hositing is not work . 
// the sum is undefined in the top of the function but in fact bottom it is decleare .


// sum(34,3) // error of initiazlizer . 
// let sum = function(a,b){
//     console.log(a+b)
// }
// sum(2,3)