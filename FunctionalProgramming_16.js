// Function is First Class Citizens in Js 

//  A programming language is said to have first-class functions when function in that language are treated like any other variable . 

// 1.  In js we can assign a function to a variable .


// const thankYou = function(){
//     console.log("Thank You")
// }

// thankYou()



// const youTube = {
//     name : 'Hayder',
//     qualif : function(){
//         console.log('I did BCS and MCS')
//     }

// }

// youTube.qualif()


// 2. Pass a function as a arrgument

// Since functions are first calss citizens in js , we are able to pass them . 

// const myName = () => {
//     return 'Hello '
// }

// const greeting = (sayHi,name) =>{
//     console.log(sayHi() + name)

// }

// greeting(myName,'Hayder')



// 3. Returning Functions 

// this is a key concept when it comes to functional programming . 

function a(){
    return function b(){
        console.log('THANK YOU SO MUCH FOR YOUR LOVE AND SUPPORT !')
    }
}

// a() you can not call when you return a function in side a function 



// a()() // 1. it means that a funcion return an other function . 
let func = a(); // 2
func()

