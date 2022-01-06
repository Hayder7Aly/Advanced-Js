console.log("This is For Loops in Js");

let people = ["Hayder", "Harry", "skillf", "Aly"];

let obj = {
  name: "harry",
  language: "javaScript",
  hobbies: "Andriod App",
};

// Tranditional for loops :

// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element)

// }

// Object.keys(obj) : - - it returns an array with keys of object :

// console.log(Object.keys(obj))

for (let index = 0; index < Object.keys(obj).length; index++) {
  const element = obj[Object.keys(obj)[index]];
  console.log(element);
}

// Modren Way to iterating in for in

// for (let key in obj){
//     console.log(obj[key])
// }

// mystring = 'This is my string';

// for (let index = 0; index < mystring.length; index++) {
//     const element = mystring[index];
//     console.log(element)

// }

// for (let i in mystring){
//     console.log(mystring[i])
// }

// Use of For Of

// for(let name in people){
//     console.log(name)
// }

for (let name of people) {
  console.log(name);
}
