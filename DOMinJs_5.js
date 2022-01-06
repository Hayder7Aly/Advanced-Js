console.log('This is Dom in js 5')
let a = document;
a = document.all;
console.log(a);

console.log(typeof(a));

Array.from(a).forEach((Element)=>{
    console.log(Element)
})



// let b = document.all;
// console.log(b)

// let c = document.body;
// console.log(c);

// let d = document.forms[0];
// console.log(d);

// let e = document.links;
// e = document.links[0].href;
// console.log(e)
// console.log(typeof(e))


// quiz 

// let quiz = document.links;
// console.log(quiz);
// for (let element of quiz) {
//     let elementh = element.href;
//     if(elementh.includes('Python')){
//         console.log(elementh)
//     }else{
//         console.log("Link does not have Python");
//     }
// }