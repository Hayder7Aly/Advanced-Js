// Only One Method To Insert,Replace,Update,Dleted the values in an array . 

const names = ['Hayder','Aly','Jutt','Goriya']
console.log(names)

// if you donot delete element in an array then it will be return an empty array . 


//                                        (I)
// ********* if you donot think that what is index of jutt then use this piece of code **** 
// let indexj = names.indexOf('Jutt');
// console.log(indexj)
// names.splice(indexj,indexj - 1 , '3D JUTT')
// console.log(names)

// 1. Insert Value or Add Value 

// names.splice(names.length,0 , 'Raza')
// names.splice(names.length - names.length ,0 , 'Raza')
// console.log(names)

// 2. Delted Values in An Array 

// names.splice(1,1)
// console.log(names)

// 3. Updated The Values In An Array

// names.splice(2,1 , 'JUTT');
// console.log(names)
 


// names.splice(0,0,'abc')
// console.log(names)
// names.splice(0,1)
// console.log(names)
// names.splice(names.length - 1, names.length - 1,'gorrriya')
// console.log(names)
// names.splice(1,1,'Aly RAza')
// console.log(names)