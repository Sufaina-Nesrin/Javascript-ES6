//split and join to make the sentence without hyphen
function sentensify(str) {
    // Only change code below this line
  return str.split(/\W/).join(" ")
  

  }
  
  console.log(sentensify("May-the-force-be-with-you"));

//Another Example
//The input is a string with spaces and title-cased words
//The output is a string with the spaces between words replaced by a hyphen (-)

function urlSlug(title) {
    return title.toLowerCase().trim().split(/\s+/).join("-")
    
    }

    console.log(urlSlug(" Winter Is  Coming"));
