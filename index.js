
function scoring(mark){  //this is where the input should be, input any mark.
let grade;
//first assign variables to be used later in the code.

//I think the conditional statement is best for this type of programme.
if (mark >= 79) {    
    grade = 'A';
}
else if (mark >= 60) {
    grade = 'B';
}
else if (mark >= 49) {
    grade = 'C';
}
else if (mark >= 40) {
    grade = 'D'
}

else {
    grade = 'E';
} 


console.log('grade = ' + grade);  
return(grade); }


scoring(50)
scoring(10)
scoring(100)
scoring(77)
scoring(67)


