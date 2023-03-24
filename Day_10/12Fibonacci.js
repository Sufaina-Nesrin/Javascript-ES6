function fibonacci(n) {
    let sequence = [0, 1];
    let sum = 1;
    for (let i = 2; i <= n; i++) {
      sequence[i] = sequence[i-1] + sequence[i-2];
      if(sequence[i]%2===1&&sequence[i]<=n){
        sum = sum+sequence[i]
      }
      
    }
    
    return sum;
  }
   console.log(fibonacci(1))  
/ console.log(fibonacci(10))  


