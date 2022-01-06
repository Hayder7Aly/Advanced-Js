console.log('DomTraversing')

let cont = document.querySelector('.container')


console.log(cont.childNodes);

console.log(cont.children)

console.log(cont.childElementCount)


console.log(cont.nextElementSibling)
console.log(cont.previousElementSibling)

console.log(cont.childNodes[0].nodeName)

console.log(cont.children[0])

console.log(cont.children[1].nodeName)

console.log(cont.children[0].nodeType)



// Node Types 


// 1  element 
// 2  attribute
// 3  text node
// 8  Comment
// 9  document
// 10 docType



// when we want parent children and their children 

// console.log(cont.children[1])
//console.log(cont.children[1].children)

// console.log(cont.children[1].children[0].children)



// console.log(cont.firstElementChild)
// console.log(cont.lastElementChild)


// console.log(cont.childElementCount)



// console.log(cont.firstElementChild.parentNode)

// console.log(cont.lastElementChild.parentNode)

// console.log(cont.firstElementChild.nextElementSibling)

console.log(cont.lastElementChild.previousElementSibling)