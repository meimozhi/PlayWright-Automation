/*
1. Create a function named `checkOddOrEven` that takes a number as a parameter  

2. Use an `if` statement to check if the number is divisible by 2 
    Hint: if the remainder when divided by 2 is 0, then the num is even

3. Declare and initialize the variable  

4. Call the function and print the result

*/

function checkOddOrEven(){
    let reminder = num%2;

    if(reminder==0){
        console.log(`The number`+` `+num+` `+`is even number`);
    }else{
        console.log(`The number`+` `+num+` `+`is odd number`);
    }

}

let num = 51;
console.log(checkOddOrEven());