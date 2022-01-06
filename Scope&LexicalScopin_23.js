// Scope Chain

// scope chain is used to resolve the value of vairable names in js 




// curring is a technique of evaluting function with multiple arguments , into sequence of function with single argument .
// Lexical Scope 

// Inner function can get access to their parent functions variable but the vice versa is not true . 

let word = 'some'

function outer(a){
    let name = 'hayder'
    function inner(){
        console.log(a+name+word)
    }
    inner()
}

outer(3)