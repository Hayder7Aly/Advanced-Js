console.log("This Is Object Prototype in JavaScript");

// Object Literals : object Prototype se start kariya ga 


let obj = {
    name : 'Hayder',
    channle:'CodeWithTech',
    Address: 'cA'
}



console.log(obj)

// constructor 

function myObj(giveName){
    this.name = giveName;
}

// prototype 

myObj.prototype.getName = function(){
    return this.name;
}


myObj.prototype.setName = function(newName){
    this.name = newName;
}

let obj2 = new myObj('HAyder ALy')
console.log(obj2.getName())