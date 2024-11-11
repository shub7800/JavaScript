/******Primitive dataType  */
//ye sab call by value hote hai ktuki unka refrence nhi balki unko copy kar ke dete hai
// changes in copy not in original 

//7 type : String , number, Boolean, null ,undefined ,symbal , BigInt-> it deal with big number

/* we cant define the language in js  like 
    const score = 33

*/

//JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime.


/******Referance (non primitive) */
// memory main derect referance allocate kiya ja sakta hai 

// Array, Objects , Function/class , Map ,Set

//note - jitne bhi non primitive type hai unka return type ob ject hi aata hai
// Array 
const heros=["saktiman","nagraj","doga"]

//Object written in {} 

let myObj={
    name:"shubham",
    age:22
}

//Function

const myFunction =function(){
    console.log("hello"); 
}


/*
Type	        typeof return value	        Object wrapper
Null	            "object"	                N/A
Undefined	        "undefined"             	N/A
Boolean	             "boolean"                  Boolean
Number	             "number"	                Number
BigInt	            "bigint"	                BigInt
String	            "string"	                String
Symbol	            "symbol"                	Symbol
*/

/************************************************************************************** */


//MEMORY IN JS

// stack(primitive), Heap(non primitive)

/*stack use primitive type memory
    -jo bhi variable declear karte hai uski ek copy milta hai 

*/


/*heap use non primitive type memory
    -it give referance of orignal variable 

    let myYtName="Shubham"

*/