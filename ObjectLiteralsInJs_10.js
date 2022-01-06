// OOPs in js

console.log("Object Oriented Programming in JavaScript . ");

// EveryThing In World is Object .

let car = {
  car: "Audi 08",
  topSpped: 89,
  run: function run() {
    console.log("Car is running");
    console.log(`Car Name ${this.car} Top Speed ${this.topSpped}`)
  },
};


// let listOfStudent = {
//   student : 'Hayder',
//   rollNo : 9,
//   subject : 'Computer Science',
//   getData(){
//     console.log(`Student Name : ${this.student}\nStudent Subject : ${this.subject}`)
//   }

// }

// console.log(listOfStudent.getData())
// console.log(car.run())



// Creating a constructor for cars  In JaavaaaaaaaaaScripppppppppppppt


function generalCar(givenName,givenTopSpped){
  this.name = givenName;
  this.speed = givenTopSpped;
  this.run = function(){
    console.log(`${this.name} Is Running`)
  }
  this.analyze = function(){
    if(this.name == 'Mercedes'){
      console.log('Mercedes Cannot Analyze With Its Own Slef ! ')
    }
    else{

      console.log(`This Car ${this.name} is slower than Mercedes is ${200 - this.speed}`)
    }
  }
}

let car1 = new generalCar('Nasan',180)
car1.run()
car1.analyze()
let car2 = new generalCar('Muruti',133)
car2.run()
car2.analyze()
let car3 = new generalCar('Mercedes',200);
car3.run()
car3.analyze()

// console.log(car1);
// console.log(car2);
// console.log(car3);

function constructor(givenName,givenAge){
  this.name  = givenName;
  this.age = givenAge;
  this.data = function(){
    console.log(this.name, this.age)
  }
}

let std1 = new constructor('Hayder', 15)
console.log(std1.name)
let std2 = new constructor('Aly', 15)
console.log(std2.name)

std1.data()
std2.data()




