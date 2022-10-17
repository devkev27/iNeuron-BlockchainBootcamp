
// TODO - program to find whether a given number is a special number or not
// Special number is when the sum of the factorial digits of a number is equal to the number itself
// example 1! + 4! + 5! = 1 + 24 + 120 = 145



function specialNum(a) {
    var a, fact = 1, sum = 0, n=a

while(a>0){
    let num=a%10;
    a=parseInt(a/10);
    fact=1;
    for(i=1;i<=num;i++){
        fact=i*fact
    }
    sum=sum+fact
}

if(n==sum){
    console.log('is a special number');
}else{
    console.log('is not a special number');
}
}

specialNum(145);