// console.log(undefined === undefined) 

// const k1 = Symbol("Identifier for k1");
// const k2 = Symbol("Identifier for k2");

// myObj = {}
// myObj[k1]='Harry';
// myObj[k2] = 'Hayder';
// myObj['name'] = 'good boy';
// console.log(myObj);
// console.log('This is Symbols in Js');

// // what is symbol ? it is primitive datatype . it is a identifier.

// const sym1 = Symbol('My identifier');
// const sym2 = Symbol('My identifier');
// console.log(sym1)
// console.log(typeof(sym1))

// console.log('mystr' === 'mystr')
// console.log(sym1 === sym2)
// console.log(null === null)
// console.log(undefined === undefined) 

console.log('\t\t\t\t\here to start new section')
const k1 = Symbol("Identifier for k1");
const k2 = Symbol("Identifier for k2");

myObj = {}
myObj[k1]='Harry';
myObj[k2] = 'Hayder';
myObj["name"] = 'good boy';
console.log(myObj);

// cannot do this in symbol  myObj.k2 or myObj['k2'] in string. 

console.log(myObj[k1])
console.log(myObj[k2])

// symbols are ignore in for in loop . 


for(key in myObj){
    console.log(key , myObj[key])
}

console.log(JSON.stringify(myObj))


