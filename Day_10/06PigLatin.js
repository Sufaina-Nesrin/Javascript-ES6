//the following code shows the different transformation of words contains alphabets and vowels

function translatePigLatin(str) {
    
    let arr = str.split('')
    for(let i=0; i<arr.length; i++){
        if(/[aeiou]/i.test(str[i])&&i===0){
         arr.splice(arr.length,0,'w','a','y')
         break;
        }else if(/[aeiou]/i.test(str[i])){
            arr.splice(arr.length,0,'a','y')
            break;  
        }
        else{
            let shift = arr.shift(arr[i])
             arr.push(shift)
        }
       // arr.push(str[i])
    }
    if(arr[arr.length-2]!=='a'){
        arr.splice(arr.length,0,'a','y');
    }
    return arr.join('')
  }
  
  console.log(translatePigLatin("eight"));
  console.log(translatePigLatin("schwartz"));
  console.log(translatePigLatin("algorithm"));
  console.log(translatePigLatin("paragraphs"));
  console.log(translatePigLatin('rhythm'));