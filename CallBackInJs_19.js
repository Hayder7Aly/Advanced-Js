console.log("this is call back in js");

// Pretend that this reponse is coming from the server 

const students = [

    {name : 'Harry' , subject : 'JavaScript'},
    {name : 'Hayder' , subject : 'Python'}
]


function enrollStudents(student,callback){
    setTimeout(function(){
        students.push(student)
        console.log('Student is add in List ')
        callback()
    },3000)
    
    // callback()
}

function getStudents(){
    setTimeout(function(){
        // let str = '';
        students.forEach(function(student){
            // str+= `<li> ${student.name}</li>`
            console.log(student)
        });
        // document.getElementById('students').innerHTML = str;
    }, 1000);
}

let newStudent = {name : 'Sunny' , subject : 'Andriod'}

enrollStudents(newStudent, getStudents)

// console.log(students)
// enrollStudents(newStudent);
// getStudents();