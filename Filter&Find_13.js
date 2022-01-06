// Differnce Between Filter v/s Find ? 

// Qno : 1 Find number greater than 12

const array1 = [5,12,8,130,44]

// The Find Method Returns The First Match Element in An Arry .

// Find and Find Index is same but findindex returns the index of element in an array 

const newArr = array1.find((element,index,array)=>{
    return element > 12 // if you use undefined value that is not present in an array then it will be return undefined.
})
console.log(newArr)

const newArr2= array1.findIndex((element,index,array)=>{
    return element > 12 // if you use undefined value that is not present in an array then it will be return undefined.
})

console.log(newArr2)


// But In Fact Other Hand, Filter Method Returns The All the matches in an array in new array  . 

const Filter = array1.filter((element,index,array)=>{
    return element > 12  
})

console.log(Filter)



// How To Filter Falsy Values In An Array ?

const Data = [
    {name : 'Hayder' , age : 45},
    {name : 'Aly' , age : 34},
    {name : 'Jutt' , age : null},
    {name : 'Thapa' , age : undefined},
    {name : null , age : undefined}
]

const filterOut = Data.filter((curEle,index,arr) =>{
    return curEle.age != null || curEle.age != undefined; // if you write only one condition unfortunately then also you work done beacuse in js null == undefined;
})

console.log(null == undefined)
console.log(filterOut)