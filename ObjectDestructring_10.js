// The Destructruing assignment syntax is a js expression that makes it possible to unpack values from arrays, or properties from objects, into distinc variables.

const bioData = {
  name: "Vinod",
  age: 25,
  deg: "MSC",
  hobbies: {
    first: "Playing",
    second: "Programming",
  },
};

console.log(bioData);
console.log(bioData.name);

// let {name,age,deg} = bioData;
// Only use keys variable for destructuring in object in js

let { age, name, deg, hobbies } = bioData;
console.log(name, age, deg, hobbies.second);

// if you want to change it

let { name: myName, age: myAge, deg: myDeg } = bioData;
console.log(myName);

// then you want first declare the variable then destructuring then use it .

// let name, age, deg;
// ({name,age,deg}) = bioData ;
