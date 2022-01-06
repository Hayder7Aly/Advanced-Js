console.log("This is CharacterSet in Regex");

// CharacterSets - []

// [a-z] can be a to z any character.
// [ruy] can ve r , u and y.

let regex = /h[a-z]rry/;
regex = /h[aty]rry/; // these charchter
regex = /h[^aty]rr[yu]/; // ^ symbole works for not these charcter
regex = /h[a-zA-z]rr[yYuU0-9][0-9]/;

// Quantifiers - use {}

regex = /har{2}y/; // r an occured exactly 2 times
regex = /har{0,2}y/; // r an occured 0 to  2 times 


// groupings - we use paranthesis for grouping ()

regex = /(har){2}/ // matches the group with 2 times 

regex = /(har){2}([0-9]r){3}/

// let str = "harry bhai";
// str  = "harhar"
let str  = "harhar1r4r5r bhai"

let result = regex.exec(str);
console.log(`exec()  `, result);

if (regex.test(str)) {
  console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `The string ${str} does not match the expression ${regex.source}`
  );
}
