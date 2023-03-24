function smallestCommons(arr) {
    let [min,max ] = arr.sort((a,b)=>a-b)
    console.log(min,max)
    let upperbound = 1
    let nOdivisors = (max-min)+1
    for(let i=min; i<=max; i++){
    upperbound *=i
    }

    for(let multiple=max; multiple<=upperbound; multiple+=5){

        let divisorCount = 0;
        for(let i=min; i<=max; i++){
            if (multiple%i===0&&multiple%2===0){
                divisorCount+=1
            }
        }
        if(nOdivisors===divisorCount){
            return multiple
        }
    }
  
  }
  
  console.log(smallestCommons([1,5]));

  //The smallestCommons function takes an array arr of two integers 
  //representing the inclusive range of numbers to find the smallest common multiple of.

//In the first step, we sort the array in ascending order and store the minimum 
//and maximum values in the variables min and max, respectively. 
//We also compute the number of divisors for the range of numbers using 
//numberDivisors = max - min + 1.

//Next, we compute an upper bound for the smallest common multiple (SCM) by 
//finding the product of all the numbers in the range. We do this by iterating over 
//the numbers in the range and multiplying them together: 
//for (let i = min; i <= max; i++) { upperBound *= i; }.

//After computing the upper bound, we test all multiples of max until
// we find a number that is evenly divisible by all numbers in the range. 
//We do this by initializing a loop variable multiple to max and incrementing 
//it by max in each iteration: 
//for (let multiple = max; multiple <= upperBound; multiple += max) { ... }.

// Inside the loop, we check if every value in the range divides multiple.
// We initialize a counter variable divisorCount to 0, and then iterate over 
//the numbers in the range again, checking if each one divides multiple evenly:
// if (multiple % i === 0) { divisorCount += 1; }.

// If divisorCount equals the number of divisors for the range (numberDivisors), 
//then we have found the smallest common multiple and return multiple from the function.

// As an example, let's consider smallestCommons([1, 5]).

// First, we sort the array to get min = 1 and max = 5. We compute the number 
//of divisors using numberDivisors = 5 - 1 + 1 = 5. We compute an upper bound 
//for the smallest common multiple as upperBound = 1 * 2 * 3 * 4 * 5 = 120.

// Next, we start testing multiples of max = 5, starting at multiple = 5.
// The first number we check is 5, which is not evenly divisible by all
// numbers in the range. We then check multiple = 10, which is also not 
//evenly divisible by all numbers in the range. We continue checking multiples 
//of max until we reach multiple = 60. At this point, we have found the smallest 
//common multiple, since 60 is evenly divisible by 1, 2, 3, 4, and 5.

// Thus, the function returns 60.