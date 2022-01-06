// console.log("This is Mapping in Js");

// // ****** !! ALERT !! *********  NOTE  : This Map is Differnent B/W map function in array so it remmembered that. 

// // Maps In JavaScript  Includes in es6

// // we can use any type of key or value in Map 



// const myMap = new Map();

// const key1 = "MyStr",
//   key2 = {},
//   key3 = function () {};

// // settting map values

// myMap.set(key1, "This is a String");
// myMap.set(key2, "This is a blank Obj");
// myMap.set(key3, "This is an empty function.");

// console.log(myMap);


// // Getting the Valuesfrom a Map

// let value1 = myMap.get(key3);
// console.log(value1);

// // get the size of Map

// console.log(myMap.size);


// // you can loop using for .. of to get keys and values

// for (let [key, value] of myMap) {
//   console.log(key, value);
// }


// // get only key 

// for(let key of myMap.keys()){
//     console.log(key)
// }

// // // get only values

// for(let value of myMap.values()){
//     console.log(value)
// }

// // // You can loop throught a map using for each 

// myMap.forEach((value,key)=>{
//     console.log(key + value)
// });


// // // you can covert the mapping in array 

// let myArr = Array.from(myMap);
// console.log(myArr);

// // // only key convert the array 

// let myArrKey = Array.from(myMap.keys())
// console.log(myArrKey)

// // // only value convert the array 

// let myArrVal = Array.from(myMap.values())

// console.log(myArrVal)






let myMap = new Map()
myMap.set('name' , 'Hayder Aly')
myMap.set('age', 15)
console.log(myMap);
let tode = Array.from(myMap)
console.log(tode);
let obj = Object.fromEntries(tode)
console.log(obj);

