const accountId=12345
let accountEmail= "shubham@gmail.com"
var accountPassword="123456"
/*
    not prefered var 
    beacuse of issue  in block scope and funcional scope
*/
accountCity = "Lucknow"

// accountId=2 // not allowed

accountEmail="sg@gmail.com"
accountPassword="254"


console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
// instant of all this above print we write 
console.table([accountId,accountEmail,accountPassword,accountCity])// it give tabular structure in the output

 
