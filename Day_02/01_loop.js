/*
int val = 5;
funtion to sum all the values between 1 to val
and return the sum
// activity ---> print between 1, 10 --> keep adding the sum of values
// 1, 2 (3), 3 (6), 4 (10), 5 (15)
// finally, print the sum !! 

*/

let n = 5;
let sum =0;
function sumOfAllNumbers(){
    
    for(a=1;a<=n;a++){
        sum = sum + a;
    }
    return sum;
}

let totalSum = sumOfAllNumbers()
console.log(`the sum is numbers from 1 to `+n+` is `+totalSum);
