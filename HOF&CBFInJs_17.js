// 1. Higher Order Function IN JS 

// Hof are functions that take other functions as an arguments or return functions as their results.

const interviewQuestions = (name)=>{
    if(name === 'vinod'){
        return function(topic){
            console.log(`Hii ${name}. What is ${topic} ? Plz explain us`)
        }
    }
    if(name === 'thapa'){
        return function(topic){
            console.log(`Hii ${name}. What is ${topic} ? Plz explain us`)
        }
    }
    if(name === 'Hayder'){
        return function(topic){
            console.log(`Hii ${name}. What is ${topic} ? Plz explain us`)
        }
    }
    else{
        return function(){
            console.log('Welcome To Interview . ')
        }
    }
}

interviewQuestions('vinod')("UI")
interviewQuestions('thapa')("CBF")
interviewQuestions('Hayder')("Reduce Method In An Array")

const another = interviewQuestions('Hayder')
another('UI')
another('UX')
another('JavaScirpt')



// Difference Between Call back And Heigher Order Funcion in js 


// HOF  function which takes another function as an arguments is called hof  


// CBF function which get passed as an argument to another function is called cbf 

// calculator 

const add = (a,b)=>{
    return a+b
}

const mult = (a,b)=>{
    return a*b
}

const sub = (a,b)=>{
    return Math.abs(a-b)
}


const Calculator = (num1,num2,operation)=>{
    return operation(num1,num2)
}
// console.log(Calculator(3,7,mult));



