// Pass by Value 

let a = 5;
let b = a; // in case b = 5
b = b + 5 // you think that b = 10 it is true but a = 5 it is pass by value . 
console.log(a,b)

// Pass by Refrence 

const obj1 = {
    user : 'Hayder',
    password : '34734'

}

const obj2 = obj1;
obj1['new'] = 'new';
obj2.password = 'JUTT'
console.log(obj1)
console.log(obj2)



const arr1 = [12,33,4,4,5]
const arr2 = arr1;

arr1.push('Hayder')

console.log(arr1)
console.log(arr2)