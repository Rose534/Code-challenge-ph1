function netSalary(salary,benefits){
    let gross = salary + benefits;  //where input of salary should happen, input any number. (naming of salary to salay is very intentional)
    let NSSF = gross * 0.06;   // where input of benefits should happen, input any number.
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

//NHIF (it's...a lot, bare with me.) comment explaining is below the statement.

if (gross <= 5999 ){
    NHIF  = 150 }
     
 else if (gross <= 7999) {
     NHIF = 300
 }
 else if( gross <= 11999){
     NHIF = 400 }

 else if ( gross <= 14999) {
     NHIF = 500}
     
 else if (gross <= 19999) {
     NHIF = 600 }
 
 else if(gross <= 24999) {
     NHIF = 750}

 else if( gross <= 29999){
     NHIF = 850}
     
 else if (gross <= 34999) {
     NHIF = 900 }
     
 else if (gross <= 39999) {
     NHIF = 950}
     
 else if (gross <= 44999) {
     NHIF = 1000}

 else if (gross <= 49999) {
     NHIF = 1100 }
 
 else if  (gross <= 59999){
     NHIF = 1200}
 
 else if (gross <= 69999) {
     NHIF =  1300}

 else if (gross <= 79999) {
     NHIF = 1400}
 
 else if  (gross <= 89999) {
     NHIF = 1500}
     
 else if (gross <= 99999) {
     NHIF = 1600}

 else if (gross >= 100000) {
     NHIF = 1700}
/*above is an if statement that goes through the entire table of NHIF (on the website) and 
gives the value in the table, that value is then taken and used as the NHIF value and also added 
with NHIF and NSSF to give us all the tax that is deducted.*/

console.log('NHIF deduction:', NHIF)
console.log('TAX & NSSF & NHIF total:', (NSSF + netIncome + NHIF ))
console.log('Net salary:', gross - (NSSF + netIncome + NHIF ))


const result={
    salary,
    benefits,
    gross,
    NSSF,
    NHIF,
    netIncome

}
console.table(result)
}
netSalary(30000,8000);
