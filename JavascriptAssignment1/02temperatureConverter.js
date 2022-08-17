
// Task to convert temperatures to and from Celsius and Fahrenheit.
// Formaula: c = celsius and f = farenheit c/5 = (f-32)/9
// c = (5/9) * (F-32)
// f = c*9/5 + 32
// Expected output - 60 deg c is 140 deg f and 45 deg f is 7.222222222222222 def f

let celsius;
let farenheit;

const cToF = (c) => { // Celsius to Fahrenheit
   celsius = c;
   farenheit = c * 9 / 5 + 32;
   console.log(`${celsius}°C is ${farenheit}°F`);
}

const fToC = (f) => { //Fahrenheit to Celsius
   farenheit = f;
   celsius = (5/9) * (f-32);
   console.log(`${farenheit}°F is ${celsius}°C`);
}

cToF(60);
fToC(45);



