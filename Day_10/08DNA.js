//Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG,
// which form building blocks of the DNA double helix.

//The DNA strand is missing the pairing element. Write a function to match the missing base pairs
// for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

//For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

function pairElement(str) {
    let arr= []
for(let i=0; i<str.length; i++){
    let subArr = [str[i]]
    
    switch(str[i]){ 
     case 'G':
       subArr.push('C')
       break;
       case 'T':
       subArr.push('A')
        break; 
        case 'A':
      subArr.push('T')
       break;
       case 'C':
      subArr.push('G')
       break;
    }
    arr.push(subArr)
}
    return arr;
  }
  
  console.log(pairElement("GCG"));// Output [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
  console.log(pairElement("ATCGA"))// Output [[ 'A', 'T' ],[ 'T', 'A' ], [ 'C', 'G' ],[ 'G', 'C' ], [ 'A', 'T' ]]