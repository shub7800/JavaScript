/*************DATE******************************* **/
// date object hota hai 

let myDate=new Date()
console.log(myDate);
//canvert date into string 
//console.log(myDate.toString());//2024-11-12T09:37:12.588Z
console.log(myDate.toString());//Tue Nov 12 2024 09:37:12 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Tue Nov 12 2024
console.log(myDate.toISOString());//2024-11-12T09:41:58.684Z
console.log(myDate.toJSON());//2024-11-12T09:41:58.684Z
console.log(myDate.toLocaleDateString());//11/12/2024
//toLocaleString- it is object
console.log(myDate.toLocaleString());//11/12/2024, 9:41:58 AM
console.log(myDate.toLocaleTimeString());//9:41:58 AM

console.log(typeof myDate);//object


// declear a specfic date 

let myCreatedDate= new Date(2023,0,23)
console.log(myCreatedDate.toDateString());//Mon Jan 23 2023
// month start at 0 in js 


//timestamp

let myTimeStamp=Date.now()
//we write both ^ this or let myTimeStamp=new Date()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());//milisecond


//how to make time into second 

console.log(Math.floor(Date.now()/1000));


//
let newDate=new Date();
console.log(newDate);

console.log(newDate.getMonth()+1);






