console.log('This is Regular Expersion In JAvaSCripT');


// Regurlar Expersions in javascirpt 



// let reg = /harry/g; // this is a regular expression literal in js 
// g  is global flag use for full string character . 

reg = /harry/g // i means case insensitive 

// console.log(reg);
// console.log(reg.source) // it returns the source of regualar expression


// our string 

let s = 'this is a great code with harry and also harry';

// Functions to match expression 


// 1. exec() - return an array for match and null for no match 

let result = reg.exec(s);
console.log(result);



// results returns the object and we get the data from result with result.index and result.input  and so on 

// console.log(result.input)
// console.log(result.index)


// let result2 = reg.exec(s);
// console.log(result2)
// let result3 = reg.exec(s);
// console.log(result3)




// 2. test() - returns true or false :


// let result = reg.test(s);
// console.log(result)




// 3 . match() - returns an array of result or null 

// let result = reg.match(s) --> wrong


// let result = s.match(reg); // good 
// console.log(result)



// 4. search() -returns index of first match else -1 


// let resutl  = s.search(reg);
// console.log(resutl)


// 5. replace() - returns returns new replace string with all the replacement . 


// let result  = s.replace(reg,'Hayder Aly')
// console.log(result)

let result2  = s.replace(reg,'Hayder Aly')
console.log(result2)


