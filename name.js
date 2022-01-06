let names = ["hayder", "aly", "jutt", "hayder", "jutt", "jutt", "aly"];

let obj1 = {};
names.forEach((name1) => {
  let repeat = 0;
  names.forEach((name) => {
    if (name1 === name) {
      repeat++;
    }
  });
  obj1[name1] = repeat;
});

console.log(obj1);
name