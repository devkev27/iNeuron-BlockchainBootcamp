//TODO - program to find whether a given number is an armstrong number or not

function armstrong(num) {

    var digits = num.toString().split('')
    var realDigits = num
    var a = 0
  
    for (let i = 0; i < digits.length; i++){
      digits[i] = Math.pow(digits[i], digits.length)
      a += digits[i]
    }
  
    if (a == realDigits) {
      console.log("Number is armstrong")
    } else if (a != realDigits) {
      console.log("Number is not armstrong")
    }
  
  
  }
  
  armstrong(171)

