let speed = 131;  //this is where the input should be, input any speed to see the ans.
let print;
//first declare the variables to be used in the global scope.

if(speed <= 70) {
    
    print = 'Ok' }

//basically says that is the if the speed is less that 70, then it can print okay.

else if (((speed-70)/5) > 12 ) {

    print = 'License suspended';}

/*for example if the speed is 150, the equation would read: 150-70 = 80, 
then 80 divide by 5 which is 16, 16 happens to be above 12, so it will print 'license suspended'*/

else if (speed >= 71) {
    print = ('points:' + (speed-70)/5)
}

/*if the speed hasn't surpursed our above 12 points, it will only print the points
eg: if our speed is 100, 100 - 70 = 30, 30 divided by 5 = 6. "6 points" is what would be printed.*/

console.log(print);