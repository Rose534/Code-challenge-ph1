/*disclaimer: as exhausting as reading this looks, trust me, 
it was more exhausting typing it all up :) */

//declaring variables.

let salay = 17000;             //where input of salary should happen.
let benefits = 3000;           // where input of benefits should happen.
let gross = salay + benefits;
let NSSF = gross * 0.06; 

/*(0.06) is the 6% for the pension, i choose to deduct from the gross because it does not increase 
or decrease like NHIF or Tax, it just stays as 6% regardless of income*/

let netCalculator = gross;
let netIncome;
let NHIF;

//TAX.
if (gross <= 24000) {
        netIncome = (gross*0.1)
    }
    
    else if (gross >= 32333) {
       netIncome = (gross*0.3)
    }

    else if (gross >= 24001) {
        netIncome = (gross*0.25)
    }

/*using if statement, for salary below 24,000 deduction will be 10%, 
for above 32,333 deduction is 30% and for above 24,001 deduction is 25%
all this should give us the gross salary minus TAX and NSSF (we deducted 6% earlier)*/

console.log('Gross salary:', gross)
 console.log('TAX deductions:', netIncome)
 console.log('NSSF deduction:', NSSF)

 //this is where i call for answers.
 
  
//NHIF (it's...a lot, bare with me.)

        if (gross <= 5999 ){
           NHIF  = gross - (gross - 150) }
            
        else if (gross <= 7999) {
            NHIF =  gross - (gross - 300)
        }
        else if( gross <= 11999){
            NHIF = gross - (gross - 400) }
    
        else if ( gross <= 14999) {
            NHIF = gross - (gross - 500)}
            
        else if (gross <= 19999) {
            NHIF = gross - (gross - 600) }
        
        else if(gross <= 24999) {
            NHIF = gross - (gross - 750)}

        else if( gross <= 29999){
            NHIF = gross - (gross- 850)}
            
        else if (gross <= 34999) {
            NHIF = gross - (gross - 900) }
            
        else if (gross <= 39999) {
            NHIF = gross - (gross - 950)}
            
        else if (gross <= 44999) {
            NHIF = gross - (gross - 1000)}

        else if (gross <= 49999) {
            NHIF = gross - (gross - 1100) }
        
        else if  (gross <= 59999){
            NHIF = gross - (gross - 1200)}
        
        else if (gross <= 69999) {
            NHIF =  gross - (gross - 1300) }

        else if (gross <= 79999) {
            NHIF = gross - (gross - 1400)}
        
        else if  (gross <= 89999) {
            NHIF = gross - (gross- 1500) }
            
        else if (gross <= 99999) {
            NHIF = gross - (gross - 1600)}

        else if (gross >= 100000) {
            NHIF = gross - (gross - 1700)}

/*the is statement goes through the entire table of NHIF (on the website) and 
deducts the repsective NHIF bill from the gross salary, then deducted by itself again
to give the actual NHIF bill, and then, the actual NHIF bill is added with NSSF, TAX bill
to give a number that will be used to subtract from the gross salary, to give us the net salary. 
get it? */
    

    console.log('NHIF deduction:', NHIF)
    console.log('TAX & NSSF & NHIF total:', (NSSF + netIncome + NHIF ))
    console.log('Net salary:', gross - (NSSF + netIncome + NHIF ))

/*in my defense, I tried functions and even switch statements, but ended getting even more confused, 
I think this code suits me better.*/