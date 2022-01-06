// Apply Methods

// The apply method is similar to call method

// The call method takes arrguments separately .

// The Apply method takes arguments as an array .

const youtuber1 = {
  name: "Hayder Aly",
  content: "Programmer",
  feature: function (rating, support) {
    console.log(
      `Youtuber Name : ${this.name} And Content Is : ${this.content} : Your Rating ${rating} And Support Is : ${support}`
    );
  },
};

const youtuber2 = {
  name: "Aly",
  content: "Programming",
};

youtuber1.feature.call(youtuber2, 5, "Subscribing");

youtuber1.feature.apply(youtuber2, [100, "Likes & Comments"]);

// Bind and Call methods are same but only difference is that bind() returns new function

// the bind() method takes an object as an first argument and creates a new function .

let func1 = youtuber1.feature.bind(youtuber2, 1, "Comments");
func1();

// Apply Simple Meaning  maximum number

let newArr = [12, 34, 6, 43, 23, 3, 434];
console.log(Math.max(...newArr));

console.log(Math.max.apply(null , newArr));
