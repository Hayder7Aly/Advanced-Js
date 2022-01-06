// type Coversion and type coercion

console.log("Welcome to Coversion and Coercion");

let myVar;
myVar = String(34);
console.log(myVar, typeof myVar);

let booleanVar = String(true);
console.log(booleanVar, typeof booleanVar);

let date = String(new Date());
console.log(date, typeof date);

let arr = String([1, 2, 3, 4, 5]);
console.log(arr, typeof arr);
console.log(arr.length);

let i = 8;
console.log(i.toString());

let str = "34344";
console.log(typeof str);
// let mystr = +str;
let mystr = Number(str);
// let mystr = +str;
console.log(typeof mystr);

console.log(Number([23232323, 343434])); // gives Nan because array is not a number so remembered it .

// let newnum = parseInt('34');
let newnum = parseFloat("34.343434");
console.log(newnum.toFixed(3), typeof newnum);

// Coercion

let mystr1 = Number("645");
let mynum = 34;

console.log(mystr1 + mynum);


