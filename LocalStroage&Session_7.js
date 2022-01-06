// 1. getItem - get the value in localstorage
// 2. setItem  - set the value in localstroage
// 3. removeItem  - delete the value in localstorage
// 4. how to add object in localstorage

// tip : -> localStorage.clear()  😄


console.log("Local Storage & Local Session")

// it has key value pair to set the element in local storage 

localStorage.setItem('Name' , 'Hayder Aly')
localStorage.setItem('Age' , 16)

console.log(localStorage.Name)
console.log(localStorage.getItem('Name'));

console.log(localStorage.getItem('dfdf')); // it returns null if not value exit . 


console.log(localStorage) // it returns all the data in the local storage .
console.log(typeof(localStorage))


// localStorage.clear()

// it delete all the item in local storage


// how to remove the particular key item in local storage . 

console.log(localStorage.getItem('Age'));

localStorage.removeItem('Age');

console.log(localStorage.getItem('Age'));


// how to add the array in localstoarge. if you do not use json.strigify then it will be add in localstorage in string . 

// we can add object and array in localStorage 

// JSON.stringify takes an object/array and returen string . 

// JSON.parse takes an string and return JavaScriptObjectNotaition . 


let myarr = ['Hayder','Aly','Jutt']
localStorage.setItem('Friend' , JSON.stringify(myarr))

const reteriveData = JSON.parse(localStorage.getItem('Friend'));

console.log(reteriveData);
// console.log(typeof reteriveData);
console.log(reteriveData[0])



console.log(typeof(localStorage.getItem('Friend')))


// Session Stoarage contains same functions and methods that take our localstorage . so it easy to learn . 

sessionStorage.setItem('Sname','Hayder')

sessionStorage.setItem('Sage','24')

