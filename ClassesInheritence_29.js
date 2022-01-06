// Every Thing In World is Object 

class Students{
    constructor(name,age,class1){
        this.name = name;
        this.age = age;
        this.class1 = class1
    }

    bioData(){
        return `Hi, My Name Is ${this.name} And My Age is ${this.age} And My Class Is ${this.class1}`
        
    }
}


class Players extends Students{
    constructor(name,age,class1,games){
        super(name,age,class1);
        this.games = games;
    }

    // bioData(){
    //     console.log(`Hi, My Name Is ${this.name} And My Age is ${this.age} And My Class Is ${this.class1} My Games Are Given Below !`)
    //     const myGames = this.games;
    //     myGames.forEach(element => {
    //         console.log(element)
    //     });


    play_BioData (){
        console.log(`${super.bioData()} My Fav Games Is ${this.games}`)
    }

   
    }

let student = new Students('Hayder',15,'9th')
let student2 = new Students('Jutt',15,'8th')
// console.log(student.name)
// student.bioData()
// student2.bioData()

let player = new Players('Vinod',25,'MCS',['Cricket','FottBall'])
player.play_BioData()