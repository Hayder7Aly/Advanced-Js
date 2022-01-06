let myObj = {
    name : 'Hayder',
    channle : 'CodeWithHarry',
    marks : [23,25,5,7]
}

console.log(myObj['name'])
console.log(myObj.name)
console.log(myObj.marks[3])


console.log(myObj)

for(let element in myObj){
    console.log(element)
}

for(let element in myObj){
    console.log(myObj[element]);
}




// let arr = ['ahdier','343','34']
// for(let el of arr){
//     console.log(el)
// }
