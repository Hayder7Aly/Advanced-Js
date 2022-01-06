console.log("This is MetaCharacter In Regular Express in Js");

// lets look some meta character in regex 

let regex = /harry/;
regex = /^har/ // ^ means starts with 
regex = /rry$/; // $ means ends with
regex = /h.r.y/ // . anyone character
regex = /h*rry/ // * more character
regex = /ha?rry/ // after character the charcter is optional ;

regex = /h*rry/; //for escape character matches the metacharcter in string 


let str = "this is harry"


let result = regex.exec(str);
console.log(`exec()  `,  result);


if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`)
}else{
    console.log(`The string ${str} does not match the expression ${regex.source}`)
}