const score=400 // in this line js automatically detect it is number 

//but we write another to declear in object manner
const balance= new Number(100)
/* 
[[Prototype]]: Number
    
    constructor: ƒ Number()
    toExponential: ƒ toExponential()
    toFixed: ƒ toFixed()
    toLocaleString: ƒ toLocaleString()
    toPrecision: ƒ toPrecision()
    toString: ƒ toString()
    valueOf: ƒ valueOf()
    [[Prototype]]: Object
    [[PrimitiveValue]]: 0
    [[PrimitiveValue]]: 100
*/
console.log(balance);//[Number: 100]
console.log(score);//400

//toString() - it canvert the number into a string 
console.log(balance.toString);//100
console.log(typeof(balance.toString()));//string 
// we alspo check the length of number because it canvert it into a string 
console.log(balance.toString().length);//3

//toFixed - it is use for making our number into decimal place by providing the req. decimal place 
console.log(balance.toFixed(3));//100.1000
//it also roundoff the value 
const num1=100.256
console.log(num1.toFixed(2));//100.26

/* toPrecision
Number of significant digits. Must be in the range 1 - 21, inclusive.
Returns a string containing a number represented either in exponential or fixed-point 
notation with a specified number of digits.
*/
const otherNum=123.8966
console.log(otherNum.toPrecision(3));//124 mean it round off the digit 

//toLocaleString - it make your number more readable US standard 
const hundreds=1000000
console.log(hundreds.toLocaleString());//1,000,000
//you want to see in indian manner representaion 
console.log(hundreds.toLocaleString('en-IN'));

/****************************Maths************************************************** ***************************/

//in js math is defult lib in js 
console.log(Math);//object
console.log(Math.abs-4);//NaN
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.2));//5 it means the always give upper value 
console.log(Math.floor(4.9));//5 it means the always give lower value 

console.log(Math.min(4,5,8,1,9));//to find the min value //1

//random -- Returns a pseudorandom number between 0 and 1.
console.log(Math.random());

// random number always give 0and 1 so we can convert greater number by multiply the number
console.log((Math.random()*10)+1 );//1.581501243332001
console.log(Math.floor(Math.random()*10)+1 )//it give round off value 

//IT MAKE A RANGE OF RANDOM NUMBER GENERATOR
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)) + MIN);

 





