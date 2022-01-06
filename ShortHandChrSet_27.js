console.log('This is ShortHand Character Classes in JavaScriPT')

// shrothand charcter classes in javascript
// + means one more 

let regex = /\wha/; // word character underscore (-) alpha or numberic
regex = /\w+rry/ // it means one or  more than one


regex = /\Wbhai/ ; //non word cahracter


regex = /\W+/ ; // for more non word character

regex = /\d999/ ;
regex = /number \d999/ ;
regex = /number \d+/ ; //means mnore than one digit 
regex = /\D+/ ; //means mnore than one  non digit 

regex = /\ska number/; // match white space charcter
regex = /\s+ka number/; // match white space charcter more 


regex =  /\Skanumber/; // match non white space charcter
regex =  /\S+kanumber/; // match non white space charcter more than one

// WORD BOUNDRAY 

regex =  /number\b/ // means that number ka baad koi word boundary ho to match ho jaye . 



// Assertions 

regex = /h(?=a)/; // it means that h ka badd jhan bhi a ho ga wahien ya match kar deiya ga . 

regex = /h(?!a)/; // it means that h ka badd jhan bhi a naaa ho ga wahien ya match kar deiya ga . 



let str  = "ha34jaidfhrry #%#%bhai harrykanumber 73463999harry9999";

let result = regex.exec(str);
console.log(`exec()  `, result);

if (regex.test(str)) {
  console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `The string ${str} does not match the expression ${regex.source}`
  );
}
