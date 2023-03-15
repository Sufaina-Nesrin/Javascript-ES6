//Factorialize a Number

function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
      product *= i;
    }
    return product;
  }
  console.log(factorialize(5));



//Using Recursion
const factor = (num)=>{
    if(num==1||num===0){
        return 1
    }else{
        let result = num * factor(num-1)
        return result
    }   
}
console.log(factor(5))