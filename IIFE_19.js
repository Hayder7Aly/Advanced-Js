// Immediately Invoked function expression in js 

// An iife is a js function that runs as soon as it is defined. 

// it is adesign pattern which is also knwo as self-executing anonymous function and container two major parts . 

// grouping operator 
// iief

// when you wand data is private and do not depend any one and self-executing. !! Alert !! Anonymouse Function is used in iief 


// ***********simple 

// function authorName(){
//     console.log('Author Name is Hayder')
// }

// authorName()

// (function(age,name){
//     console.log(age)
//     console.log(name)
// })(15,'Hayder')


// console.log(aName)// error


(function(test){
    console.log('what is the ' + test + ' ?')
})('chellenge')

