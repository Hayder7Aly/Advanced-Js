
// const arr = [
//     ['zone_1' , 'zone_2'],
//     ['zone_1' , 'zone_2'],
//     ['zone_1' , 'zone_2'],
//     ['zone_1' , 'zone_2'],
//     ['zone_1' , 'zone_2']
// ];

// const newArr = arr.reduce((accum,curEle)=>{
//     return accum.concat(curEle)
// })

// console.log(newArr)

// How to flatten an array in flat method 

// flat method creates a new array with all sub-elements concatination into it recursively up to the spicified depth.  

const arr2 = [
    ['zone_1' , 'zone_2'],
    ['zone_1' , 'zone_2'],
    ['zone_1' , 'zone_2'],
    ['zone_1' , 'zone_2'],
    ['zone_1' , ['zone_1' , ['zone_1' , 'zone_2']]]
];
// 1,2,3 means in which depth you want to conver the array in one array mens 1,2,3 deomensional array but in fact , infinity automatically flat you array easily . 

console.log(arr2.flat()) // one is default
console.log(arr2.flat(2)) 
console.log(arr2.flat(3))
console.log(arr2.flat(Infinity))


const arr = [
    [1,2,3,1,2,3] , [1,2,3],
    [5,6,7,1,2,3] , [89,0,6],
    [5,6,7,1,2,3] , [89 ,[1,2,3] ,0,6],
    [5,6,7,[1,2,3]] , [89,0,6],
]


console.log(arr.flat(2))
