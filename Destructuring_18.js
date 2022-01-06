console.log('This is javascript for destructuring.')

// destructuring in javascript . 

// let a,b;
// [a,b] = [23,45]
// console.log(a,b);


// let [a,b,c, ...d] = [1,2,3,4,5,6,7,8,9,10,11,12]

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)


// let {a,b,c , ...d} = {a:34,b:345,c:56,d:34,e:54,f:34};
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)


// const fruits = ['Apple','Bananna','Mangoes'];
// let [a,b,c] = fruits ;
// console.log(a,b,c) ;



// inthis case of object destructuring then you can take same number as same keys of object 

const laptop = {
    model : 'Hp Pavilion',
    age : '23 days',
    gender : 'Male',
    net : 1234,
    start : function(){console.log('Started')}
}


const {model,age,gender,net,start}  = laptop;
console.log(model,age,gender,net,start) 


