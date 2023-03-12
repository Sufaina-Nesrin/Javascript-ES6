//So far, you have only been checking if a pattern exists or not within a string. 
//You can also extract the actual matches you found with the .match() method.

//To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

//Here's an example:

let string ="Hello, World!".match(/Hello/);
console.log(string)//here it consoles Hello



//Find More Than the First Match
//So far, you have only been able to extract or search a pattern once.

let repeatString = "Twinkle twinkle twinkle"
let stringRegex = /twinkle/gi   //g for global flsg i for the ignoring case
let result = repeatString.match(stringRegex);
console.log(result)               // consoles all twinkle in the string

//......................................................................................................................
console.log(".......................................................................")
//Match Anything with Wildcard Period

//The wildcard character . will match any one character. The wildcard is also called dot and period. 
//You can use the wildcard character just like any other character in the regex. For example, 
//if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.

let humStr = " hum a hug hun  huge song sing";
let huRegex = /hu./gi; //global flag and ignoring-the-case flag
console.log(humStr.match(huRegex))


//......................................................................................................................
console.log(".......................................................................")
//Match Single Character with Multiple Possibilities

//You learned how to match literal patterns (/literal/) and wildcard character (/./). 
//Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. 
//There are options that are a balance between the two extremes.

let multipleString = "bug big bog bag beg"
let multipleRegex = /b[aiou]g/g;
console.log(multipleString.match(multipleRegex));// consoles bug big ...except beg


//......................................................................................................................
console.log(".......................................................................")
//Match Letters of the Alphabet

//there is an another shorthand to help the pecify a group of characters to match,
//here is an example:-

let groupString = "cat bat mat rat sat"
let groupRegex = /[a-n]at/g
console.log(groupString.match(groupRegex));// consoles cat , bat , mat;


//......................................................................................................................
console.log(".......................................................................")
//Match Numbers and Letters of the Alphabet

//Using the hyphen (-) to match a range of characters is not limited to letters. 
//It also works to match a range of numbers.

//For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
console.log(jennyStr.match(myRegex));//it consoles the array of 'J', 'e', 'n', 'n','y', '8', '6', '7','5', '3', '0', '9' these letters and numbers


//......................................................................................................................
console.log(".......................................................................")
//Match Single Characters Not Specified

//To create a negated character set, you place a caret character (^) after the opening bracket and before the 
//characters you do not want to match.

//For example, /[^aeiou]/gi matches all characters that are not a vowel.
// Note that characters like ., !, [, @, / and white space are matched - the negated vowel character 
//set only excludes the vowel characters.

let quoteSamples = "3 blind mice.";
let myRegeX = /[^aeiou0-9]/gi; 
let results = quoteSamples.match(myRegeX);
console.log(results);//as like specified later it consoles white spaces also


//......................................................................................................................
console.log(".......................................................................")
//Match Characters that Occur One or More Times

let difficultSpelling = "Mississippi";
let diffRegex = /s+/g;
console.log(difficultSpelling.match(diffRegex)); //consoles [ 'ss', 'ss' ]

//here s+ literal checks the consecutive s and count it ,if it is one s then count 's' we can use any char instead of 's'

let text = "<h1>Winter is coming</h1>";
let textRegex = /<.*?>/g; // Change this line
console.log(text.match(textRegex)) ;