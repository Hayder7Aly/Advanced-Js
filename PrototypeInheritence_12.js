console.log('This is Prototype Inheritence In Js')

const proto = {

   slogon : function (){
       return `This company is the best`
   },

   changeName : function(NewName){
       this.name = NewName;

   }

}



// console.log(proto.slogon())
// console.log(proto.changeName('Hayder'))

// Way I this creates hydr object 


// const hydr = Object.create(proto);
// hydr.name = 'Hayder'
// hydr.role = 'Programmer'
// hydr.changeName('Hayder Aly')
// console.log(hydr)
// console.log(hydr.name)


// WAY iI this creates also  hydr object . 

// In this case if i write wriateable true then  i can change the values in prototype . 

// const hydr = Object.create(proto,{
//     name: {value : "Harry" , writable : true},
//     Role: {value : "Programmer"}
     
// })


// hydr.changeName('Hayder')

// console.log(hydr)


// Employee Constructor 


function Employee(name,salary,experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience; 
}


// slogans 

Employee.prototype.slogon = function(){
    return `This company is the best Regards, ${this.name}`
}


let hayder = new Employee('Hayder',100000,'2 years')

console.log(hayder.slogon())

function Programmer(name,salary,experience,language){

    Employee.call(this,name,salary,experience)
    this.language = language;



}

// inherit the prototype 

Programmer.prototype = Object.create(Employee.prototype)

// Manually set the constructor

Programmer.prototype.constructor = Programmer;

let proObj = new Programmer('Hayder Aly',234,0,'JavaScript Python');

console.log(proObj)
console.log(proObj.slogon())