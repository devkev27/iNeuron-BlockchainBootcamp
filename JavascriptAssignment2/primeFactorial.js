// TODO factorial of all prime numbers between a given range
// Range passed as 2 values in the function parameters
// values between 1-100

// const num = parseInt()
// let isPrime = true;

// if (num===1)
// {
//     console.log("1 is not a prime number");
// }
// else if (num > 1)
// {
//     for (let i = 2; i < num; i++)
//     {
//         if (num % 1 == 0) 
//         {
//             isPrime = false;
//             break;
//         }
//     }
// let isPrime = 1;
// for (j = 1; j <= num; j++)
// {
//     isPrime *= j;
// }
// }

// console.log(isPrime(13));

const lowerNum = parseInt(1)
const higherNum = parseInt(100)

console.log(`The factorial prime numbers between ${lowerNum} and ${higherNum} are:`);

function prime(lowerNum,higherNum) {
    for (let i = lowerNum; i <= higherNum; i++) {
        let flag = 0;
    
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
    
        if (i > 1 && flag == 0)
        {
        
        }
    }
}










