// Rest parameter is an improved way to handle function parameter, allowing us to more easily handle various input as parameters in a function. The rest parameter syntax allows us to represent an indefinite number of arguments as an array . 


function sum(a,b,c,d,e,f){
    console.log(a+b+c+d+e+f);
}

sum(1,2,3,4,5,6)


function sum2(...inputs){
    console.log(inputs)
    let total = 0;
    for(let i of inputs){
        total += i ;
    }


    console.log(total)
}

sum2(1,2,3,4,5,6,7,8,9,10)



function func(a,b,...c){
    console.log(`${a} ${b}`)
    console.log(c)
    console.log(c[0])
    console.log(c.length)
    console.log(c.indexOf('Edan'))
}

func('Ronaldo','Neymar','Pele','Messi','Edan')


////////////////// practice

// function tkeArry(ary){
//     let reduce = ary.reduce((accum,curElem)=>{
//         return accum += curElem
//     })
//     console.log(reduce)
// }

// let ary = [1,2,3,4,5,6,7,8,9,40]
// tkeArry(ary)



// //  spread and rest operator 
// function newarr(...ary){
//     let reduce = ary.reduce((accum,curElem)=>{
//         return accum += curElem
//     })
//     console.log(reduce)
// }

// let num = [11,22,33,44,55]
// newarr(...num)
