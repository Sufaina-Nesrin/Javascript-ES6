//Regular expressions are used in programming languages to match parts of strings. 
//You create patterns to help you do that matching.

//If you want to find the word the in the string The dog chased the cat, 
//you could use the following regular expression: /the/. 
//Notice that quote marks are not required within the regular expression.

//JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. 
//The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), 
//and returns true or false if your pattern finds something or not.

let theString = "There is a word in the string";
let theRegex = /word/
let theAnotherRegex = /Word/
let theResult = theRegex.test(theString);
console.log(theResult); //consoles true
console.log(theAnotherRegex.test(theString))//consoles false

// ..........................................................................................................................

//Match a Literal String with Different Possibilities

//Using regexes like /coding/, you can look for the pattern coding in another string.


//This is powerful to search single strings, but it's limited to only one pattern. 
//You can search for multiple patterns using the alternation or OR operator: |.

let petString = "I have a cat , dog and cow in my house";
let petRegex = /cow|dog|cat|parrot\fish/
console.log(petRegex.test(petString))

// .............................................................................................................................

//Ignore Case While Matching

//Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. 
//Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.

//You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag 
//that ignores case - the i flag. You can use it by appending it to the regex

let myString = "HeLloWorld"
let stringRegex = /helloworld/i
console.log(stringRegex.test(myString)) //consoles true

//....................................................................................................
//Match Anything with Wildcard Period

//The wildcard character . will match any one character. The wildcard is also called dot and period. 
//You can use the wildcard character just like any other character in the regex. For example, 
//if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.


let huStr = " hum a hug hun  huge song sing";
let hugStr = "Bear hug";
let huRegex = /hu./gi; //global flag and ignoring-the-case flag

console.log(huRegex.test(huStr)) //consoles true;

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
console.log(firstRegex.test(firstString))
console.log(firstString)


