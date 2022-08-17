
// Task to write a program to find whether a given year is a leap year or not
// Leap Year is when Year divided by 4 = whole number and year divided 100 = not a whole number unless it is divided by 400

function leapYear(year) {
return ((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0));
}

console.log(leapYear(2012)); //true

console.log(leapYear(2013)); //false