//TODO sum of multiples of 3 and 5 under 1000

var sum = 0;
function multiplesOf3and5(number){
    for(var i=1; i<number ; i++){
    if(i%3 === 0 && i%5 === 0){
        sum=sum+i;
        }
    }
    console.log("Sum of multiplies of 3 and 5 under 1000 = "+sum);
}
multiplesOf3and5(1000);

