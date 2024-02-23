/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/

function calculateGrade() {
    
    switch(true){

        case (score>=90):
            return `The grade for this score`+` `+score+` is "A" "PASSED"`;
           

        case (score>=80):
            return `The grade for this score`+` `+score+` is "B" "PASSED"`;
           
       
        case (score>=70):
            return `The grade for this score`+` `+score+` is "C" "PASSED"`;

        case (score>=60):
            return `The grade for this score`+` `+score+` is "D" "PASSED"`;

        case (score>=50):
            return `The grade for this score`+` `+score+` is "E" "PASSED"`;

        case (score<50):
                return `The grade for this score`+` `+score+` is "F" "FAILED"`;
        
    }
}

let score = 10;
let grade = calculateGrade();

console.log(grade);