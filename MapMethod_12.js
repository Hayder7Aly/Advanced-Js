// The map() method creates a new array with the results of calling a function for every array element . 

// Me Definition For Map 

// When You Want Apply A Function For Each Element In An Array Then You Use Map Method . It Works Like Loop 

// The map() method calls the provided function once for each element in an Array, in order.

// Syntax 

// Array.map(function(currentElement,index,array) , thisValue )


const oldArr = ['Hayder','Aly','Jutt'];

// console.log(oldArr[0]);
// console.log(oldArr[1]);
// console.log(oldArr[2]);

const NewArr = oldArr.map((curElement,index,Arry) =>{
    // console.log(curElement + index)
    return curElement[0].toLowerCase() + curElement.slice(1);
})
console.log(NewArr)


const number = [1,2,3,4,5,6];
const newNumber = number.map((curelem) =>{
   return curelem * 2;
})
console.log(newNumber)


const StudentData = [
    {id : 1 , name : 'Hayder' , degree : 'MSC'},
    {id : 2 , name : 'Aly' , degree : 'BCS'},
    {id : 3 , name : 'Jutt' , degree : 'FA'}
]

// console.log(StudentData[0].name)

const DataNew = StudentData.map((curElement,index,array) => {
    const {name,id,degree} = curElement;
    return `My Name Is ${name} And ID : ${id} And Degree Is : ${degree}`  
})

console.log(DataNew)