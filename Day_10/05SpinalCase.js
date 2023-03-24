function spinalCase(str) {
    
     str = str.replace(/([a-z])([A-Z])/g, "$1-$2");
      //return str.toLowerCase().split(/\W|_/).join("-")Or
      return str.toLowerCase().replace(/\W|_/g,"-")
    
  }
  
  console.log(spinalCase('thisIsSpinalTap'));
  console.log(spinalCase('This Is Spinal Tap'));
  console.log(spinalCase("The_Andy_Griffith_Show"))