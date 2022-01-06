console.log('This is Generators In Js');

// Generators In Js

function* numberGen(number){
    let i = 0;
    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;

    while(true){

        // if one work take 67 or more second in your code in running in this fact we can create generator for generate the value on the fly . 

        yield i++;
    }
}


const gen = numberGen()

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)

for(let index = 0 ; index<10 ; index++){
    console.log(gen.next().value)
}

