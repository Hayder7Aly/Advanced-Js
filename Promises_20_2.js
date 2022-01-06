console.log("this is Promisses js");

// Pretend that this reponse is coming from the server 

const students = [

    {name : 'Harry' , subject : 'JavaScript'},
    {name : 'Hayder' , subject : 'Python'}
]


function enrollStudents(student){

    return new Promise(function(resolve,reject){
        setTimeout(function(){
            students.push(student)
            console.log('Students has been enrolled')
            let error = false;
            if (!error){
                resolve();
            }
            else{
                reject();
            }
            
        },3000)

    })
    
    
}

function getStudents(){
    
    setTimeout(function(){
        // let str = '';
        students.forEach(function(student){
            console.log(student)
            // str+= `<li> ${student.name}</li>`
        });
        // document.getElementById('students').innerHTML = str;
    }, 1000);
}

let newStudent = {name : 'Sunny' , subject : 'Andriod'}

enrollStudents(newStudent).then(getStudents).catch(function(){
    console.log('An error is occured during fetched the studetns .')
})

getStudents();


