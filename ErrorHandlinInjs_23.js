console.log("This is Error Handlin in Javascript");

// pretent this is comming from a server as reponse

let a = "hayder aly";
// a = false;
if (a != undefined) {
//   throw new Error("This is not  undefined");
console.log("yes")
} else {
  console.log("This is undefined");
}

try {
  // jakldjfdfhdf
  console.log("we are inside try block");
  functionHelo();
  console.log("hayder aly");
} catch (error) {
  console.log("are You Okay ?");
  console.log(error.message);
  console.log(error.name);
} finally {
  console.log("Finally we will run this ");
}