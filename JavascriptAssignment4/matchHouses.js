// TODO - create a function that takes a number (step) as an argument and returns the number of matchsticks in that step
// Take input from the user in the function parameter and return the output using the return statement
// e.g. matchHouses(1) -> 6, matchHouses(4) -> 21, matchHouses(87) ->
// matchsticks = n * 5 + 1

const matchHouses = (num) => {
    if (num <= 0 || typeof num !== 'number') {
        return 'please enter a non-negative integer above 0'
    } else {
        let sticks;
        sticks = num*5+1;
        return sticks;
    }
}

console.log(matchHouses(1));
console.log(matchHouses(4));
console.log(matchHouses(87));
console.log(matchHouses(0));

