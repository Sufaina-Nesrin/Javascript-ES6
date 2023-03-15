//Check if a value is classified as a boolean primitive. Return true or false.
//Boolean primitives are true and false.

  function booWho(bool) {
     if(bool===true){
          return true
     }else if(bool===false){
          return true
     }else{
          return false
     }
        }
    console.log(booWho(false));

    //Another Simplest way;
     function CheckBool(bool){
        return typeof(bool) ==='boolean'
     }
     
     console.log(CheckBool(3))