// Closure In Js ?


// Closure in action that is inner function can have access to the outer function variable as well as all the global variable . 


// A closure is the combination of a function and the lexical environment with in which that function was declared. 

// some where a and b are stored in memory then innerfunc call automatically fetch the data from closure and disply it 


const outerFun = (a) => {
    let b = 10;
    const innerFun = () =>{
        let sum = a + b;
        console.log(`The Sum of Two Number Is ${a+b}`);
    }
    return innerFun;
}
// outerFun(15)()

let innerfunc = outerFun(3);
innerfunc()
// console.dir(innerfunc)



// This is a function 


const interviewQuestion = (name) =>{
    return function(topic){
        
        if(name == 'vinod'){
            console.log(`Hii,  ${name}  Plz Explain What is ${topic} ?`)
        }
        
        else if(name == 'thapa'){
            console.log(`Hii,  ${name}  Plz Explain What is ${topic} ?`)
        }
        
        else if(name == 'hayder'){
            console.log(`Hii,  ${name}  Plz Explain What is ${topic} ?`)
        }
        else{
            console.log(`Welcome To CodeTech Company . `)
        }

    }
}

// const candiates = interviewQuestion('hayder');

// candiates('UI')

interviewQuestion('hayder')('React')
interviewQuestion('vinod')('Angular')
