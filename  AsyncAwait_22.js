console.log("This is Async Await in js");

// async returns a promise
async function hayder() {
  console.log("Inside Hayder Function");
  // return "Hayder is a good boy"

  const reponse = await fetch("hayder.txt")
  console.log("Before Response");
  const users = await reponse.text();
  console.log("Users resolved");
  // console.logusers
  return users;
}

console.log("Before Calling Function");
let a = hayder();
console.log("After Calling Function");
console.log(a);
a.then((data) => console.log(data)).catch(() => {
  console.log("an error is occured");
});
console.log("Last Line of this file");