// What is bind() method ?

// simple meaning of bind() method is bind the object function to many other objects

// let function = firstObj.ObjFunc/outsideObjFunc.bind(SecondObj)

// the bind() method takes an object as an first argument and creates a new function

// By this bind method, we can bind an object to a common function, so that the function gives different result when its need .

const youTuber = {
  name: "Thapa",
  content: "Programming",
  age: 14,
  features: function () {
    console.log(
      `My Fav Youtuber name is ${this.name} and Content is ${this.content} `
    );
  },
};

const youTuber2 = {
  name: "Hayder",
  content: "Coding",
};

// youTuber.features()

// let youtubeFunc = youTuber.features;
// youtubeFunc();

// let youTuberFun2 = youTuber.features.bind(youTuber2)
// youTuberFun2()

// the bind() method takes an object as an first argument and creates a new function

const student1 = {
  student: "Hayder",
  role: "Programmer1",
};
const student2 = {
  student: "Hayder",
  role: "Programmer2",
};
const student3 = {
  student: "Hayder",
  role: "Programmer3",
};

function feature(rating,something) {
  console.log(
    `My Fav Youtuber name is ${this.student} and Content is ${this.role} I will love to give ${rating} star. ${something}`
  );
}




let std1 = feature.bind(student1)
std1(4);

// call () and bind () as same as that :

const blogger = {
  name: "Hayder",
  content: "programming",
  data: function (rating, support) {
    console.log(
      `Name : ${this.name} And Content : ${this.content} Rating Is : ${rating} and Support : ${support}`
    );
  },
};

const blogger2 = {
  name: "Aly",
  content: "coding",
};

blogger.data.call(blogger2 , 1 , 'subscribe')






