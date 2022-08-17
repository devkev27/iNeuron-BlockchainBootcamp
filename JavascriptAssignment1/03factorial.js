// Task to write a program to find the factorial of a number
// Factorial formula is n! = n * (n-1)!

const factorial = (num) => {
    var result = num;
    if (num === 0 || num === 1) 
        return 1;
    while (num > 1) {
        num--;
        result *= num;
    }
    return result;
}

console.log(factorial(-1));






