function telephoneCheck(str) {
    const regExp = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/

      //(1\s?)?: optional 1 followed by an optional space
      //(\(\d{3}\)|\d{3}): three digits enclosed in parentheses or three digits
      //[\s-]?: optional space or hyphen
      //\d{3}: three digits
     //[\s-]?: optional space or hyphen
     //\d{4}: four digits

    return regExp.test(str);
  }
  
  console.log(telephoneCheck("555-555-5555"));
//   telephoneCheck("123**&!!asdf#")  should return false
//   telephoneCheck("1 456 789 4444") should return true
//   telephoneCheck("(6054756961)") should return false