// curring is a technique of evaluting function with multiple arguments , into sequence of function with single argument .


// function sum(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return a+b+c+d
//             }
//         }
//     }
// }

// let func1 = sum(1)
// func2 = func1(1)
// func3 = func2(1)
// console.log(func3(1))


const sum = (a) => (b) => (c)=> (d) => a+b+c+d



// currying helps you to avoid passing the same variable agian and again. 
console.log(sum(5)(10)(7)(3))

