const name="Shubham"// string are written "" as well as '' also 
const repoCount=50

//console.log(name+repoCount+"Hello wOrld");//Shubham50Hello wOrld

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//Hello my name is Shubham and my repo count is 50
// `` use karne pe atta hai stringinterpolation 
/*String interpolation is a programming technique that replaces placeholders
 in a string with their corresponding values*/

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);//we can add  method in the placeholder also 
// in this we canvert the name into upper case in the placeholder usint method 

//how to declear string 
const gameName= new String('Shubham-gupta')
//new  mean we use object of js 
console.log(gameName);
// string is object and they give output in the form key value pair
console.log(gameName[0]);// it print the key of given input
console.log(gameName.length);//it give the length of string 
// it cant change our orignal string beacuse it make replica of this variable 
console.log(gameName.charAt(5));//it give the output acc. to their index 
console.log(gameName.indexOf("m"));// it give the index of the given output 

//substring
const  newString=gameName.substring(0,4)
console.log(newString);
//substring cant support reversing 


//slice
const anotherString=gameName.slice(-7,4)
console.log(anotherString);
//it is slice the string in reverse order 

//trim- remove extra space
const newString1="    shubham    "
console.log(newString1.trim());//shubham
console.log(newString1);//    shubham 

//replace 
const url="https://shubham.com/shubham%20Gupta"
console.log(url.replace('%20','-'));//https://shubham.com/shubham-Gupta


//include
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false


//split
const newString2="shubham-Gupta-23"
console.log(newString2.split('-'));






