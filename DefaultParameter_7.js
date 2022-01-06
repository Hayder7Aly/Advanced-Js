// default function parameters allow named parameter to be initialized with default if no value or undefined is passed 

function mult (a,b){
    b = (typeof b != 'undefined') ? b : 2
    console.log(a*b)
}

mult(4)


function mult2 (a=4,b=5,c=2){
    console.log(a*b*c)
}

mult2()
