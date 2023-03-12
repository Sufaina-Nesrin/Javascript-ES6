//Match Beginning String Patterns

//In an earlier challenge, you used the caret character (^) inside a character set to create
// a negated character set in the form [^thingsThatWillNotBeMatched]. 
//Outside of a character set, the caret is used to search for patterns at the beginning of strings.

let theString = "Ricky is first and can be found "
let theRegex = /^Ricky/
console.log(theRegex.test(theString)); //returns true
let notFirst = "You can't find Ricky now.";
console.log(theRegex.test(notFirst))//returns false


//......................................................................................................................
console.log("...................................................................................")
//Match All Letters and Numbers

//The closest character class in JavaScript to match the alphabet is \w. 
//This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers.
// Note, this character class also includes the underscore character (_).
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
console.log("LongHand:"+longHand.test(numbers))
console.log("ShortHand:"+shortHand.test(numbers))//both of them return true


//.......................................................................................................................
console.log(".......................................................................")
//Match Everything But Letters and Numbers

//You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. 
//This shortcut is the same as [^A-Za-z0-9_].

let shorTHand = /\W/;
let numberS = "42%";
let sentence = "Coding!";
console.log(numberS.match(shorTHand));
console.log(sentence.match(shorTHand));


//......................................................................................................................
console.log(".......................................................................")
//Match all Numbers

//The shortcut to look for digit characters is \d, with a lowercase d. 
//This is equal to the character class [0-9], which looks for a single character of any number between zero and nine

let movieNames = "2001: A Space Odyssey";
let numRegex = /\d/g; //
let results = movieNames.match(numRegex).length;
console.log(results)// returns 4


//......................................................................................................................
console.log(".......................................................................")
//Match All Non-Numbers

//The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], 
//which looks for a single character that is not a number between zero and nine.

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; 
let result = movieName.match(noNumRegex);// consoles the non digit characters
console.log(result.length);


//......................................................................................................................
console.log(".......................................................................")
//Match White Spaces

//You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace,
// but also carriage return, tab, form feed, and new line characters. 
//You can think of it as similar to the character class [ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
console.log(whiteSpace.match(spaceRegex).length); //returns 2

//......................................................................................................................
console.log(".......................................................................")
//Match Non-Spaces

//Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, 
//carriage return, tab, form feed, and new line characters. You can think of it being similar 
//to the character class [^ \r\t\f\n\v].

let whiteSpaces = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
console.log(whiteSpaces.match(nonSpaceRegex))


//......................................................................................................................
console.log(".......................................................................")
//Specify Upper and Lower Number of Matches

//You can specify the lower and upper number of patterns with quantity specifiers. 
//Quantity specifiers are used with curly brackets ({ and }). You put two numbers between 
//the curly brackets - for the lower and upper number of patterns.

//For example, to match only the letter a appearing between 3 and 5 times in the string ah,
// your regex would be /a{3,5}h/.

let A4 = "aaaaaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
console.log(multipleA.test(A4));
console.log(multipleA.test(A2));
console.log(A4.match(multipleA));
console.log(A2.match(multipleA));


//......................................................................................................................
console.log(".......................................................................")
//Specify Only the Lower Number of Matches

//To only specify the lower number of patterns, keep the first number followed by a comma.

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; 
console.log(haRegex.test(haStr)) ;


//......................................................................................................................
console.log(".......................................................................")
//Specify Exact Number of Matches

//To specify a certain number of patterns, just have that one number between the curly brackets

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; 
console.log(timRegex.test(timStr)) ;


//......................................................................................................................
console.log(".......................................................................")
//Check for All or None

//You can specify the possible existence of an element with a question mark, ?. 
//This checks for zero or one of the preceding element. 
//You can think of this symbol as saying the previous element is optional.

let American = 'color'
let Britian = 'colour'
let colRegex = /colou?r/
console.log(colRegex.test(American))
console.log(colRegex.test(Britian)) //both returns true 

let repeatNum = "42 42 42";
let reRegex = /(\d+) \1 \1/ ;// Change this line
console.log(repeatNum.match(reRegex));


