// TODO - function find_largest to return the nth largest number in an array

const find_largest = (arr,n) => arr.sort((a,b) => b-a)[n-1];

console.log(find_largest([3,45,6,7,23,5,7,8],3));