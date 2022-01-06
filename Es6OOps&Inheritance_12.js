// console.log("ECMA Script Object Oriented Programming & Inheritence");

// class Employee {
//   constructor(givenName, givenExperience, givenDivision) {
//     this.name = givenName;
//     this.experience = givenExperience;
//     this.division = givenDivision;
//   }

//   slogan(){
//     return `I am ${this.name} and This company is the best`;
//   }
//   joinIngYear() {
//     return `${2021 - this.experience} Joining Year of Your Job in this company`;
//   }

//   // static method in javascript it work is out of the class . 

//   static add(a, b) {
//     return a + b;
//   }
// }

// class Programmer extends Employee {
//   constructor(givenName, givenExperience, givenDivision, language, github) {
//     super(givenName, givenExperience, givenDivision);
//     this.language = language;
//     this.github = github;
//   }

//   favlang() {
//     if (this.language == "python") {
//       return "python";
//     } else {
//       return "Javascript";
//     }
//   }

//   static multiply(a,b) {
//       return a*b
//   }
// }


// let harry = new Employee("Hayder Aly", 5, "Programmer");

// // console.log(harry);

// // console.log(Employee.add(5, 2));

// let rohan = new Programmer('Rohan',10 ,'Lays','Go','rohien3');

// console.log(rohan.favlang())

// console.log(Programmer.multiply(3,2))
// console.log(Programmer.add(3,2))
// console.log(Employee.add(3,2))


// console.log(rohan.joinIngYear())
// console.log(rohan.slogan())




class Employee{
  constructor(givenName, giveExperience, givenSalary, givenSlogan){
    this.name = givenName;
    this.experience = giveExperience;
    this.salary = givenSalary;
    this.empSlogan = givenSlogan;
  }
  slogan(){
    return `${this.name} Says About Our Company : ${this.empSlogan}`
  }
  dataOfEmployee(){
    return `${this.name}${this.experience}${this.salary}`
  }
}

class Programmer extends Employee{
  constructor(givenName, giveExperience, givenSalary, givenSlogan , languages , githubFollowers){
    super(givenName,giveExperience,givenSalary,givenSlogan)
    this.languages = languages;
    this.githubFollowers = githubFollowers;
  }

  dataofProgrammer(){
    let firstData = this.dataOfEmployee()
    return `${firstData} ${this.languages}${this.githubFollowers}`
  }
}

const emp = new Employee('Larry Pay' , '+5 years' , 500000, 'Let deploy Yourself with gracefully')
const pro = new Programmer('Hayder Aly' , '+1.5 years' , 100000, 'Can you code with patience' , ['python' , 'javascript'],5000)

console.log(emp.dataOfEmployee())
console.log('\n\n\n');
console.log(pro.dataofProgrammer());