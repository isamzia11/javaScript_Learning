let number = "33" 
console.log(typeof number) 
console.log(typeof (number)) 
let valueInNumber = Number(number) 
console.log(typeof valueInNumber) 
console.log(valueInNumber)

/*
"33" => 33 easily converted 
"33abc" => NaN cannot be converted 
true => 1 , false => 0

*/

// **************** operations ****************

let value = 3 
let negValue = -value
console.log(negValue)
console.log("1" + 2) 
console.log(1+ "2") 
console.log("1" + 2 + 2) 
console.log(1 + 2 + "2") 

let x = 3
let y = x++ 
console.log(`x:${x}, y:${y}`) 


let a = 3
let b  = ++a 
console.log(`a:${a}, b:${b}`)