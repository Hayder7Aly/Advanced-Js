// "this" keyword in javascript 

// The javascript this keyword refers to the object it belongs to . 

// it has difference value depending on where it is used. 

// Alone, this refers to the global object 


// in a method this refers to the owner object. 

// in a function , in strict mode , this is undefined 


const thapa = {
    name : 'hayder',
    quailfy : 'msc',
    sum : function(){
        console.log(this.name)
        let add = 2+2;
        console.log("sum of two no. is " + add)
        console.log(this)

        function child(){ // regular function
            var name = 'thapa'
            console.log('Child method name ' + name)
            console.log(this)
        }
        child()
    }
}

thapa.sum()


