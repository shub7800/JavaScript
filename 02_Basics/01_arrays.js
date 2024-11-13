/**********************************ARRAYS***************************** */

//how to declear an array 
const myArr=[0,1,2,3,4,5]
//2 way
const myHero=["saktiman","nagraj"]
//3 way
const myArr2=new Array(1,2,3,4,5)
//0,1,2,3,4,5 are element of array it either string or a number
//it comntain multiple type of datatype in a array element const myArr=[0,1,2,3,4,5 ,true ,"shubham"]
// arrray is object 
//enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
//JavaScript arrays are resizable and can contain a mix of different data types.
/*JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create 
shallow copies, rather than deep copies).*/

/*Shallow copy--  A shallow copy of an object is a copy whose properties share the same references
means when we change in copy array they also reflect in orignl array*/

//Deep Copy --    A deep copy of an object is a copy whose properties do not share the same references

//in array has prototype and within array has another prototype called object

/**************************ARRAY METHODS************************************** */


//.push()- add the value in an array 
//myArr.push(6)
//myArr.push(7)
//console.log(myArr);


//.pop()-- jo bhi last value hogi array ke ander usko delete kar dega 
//myArr.pop()
//console.log(myArr);

//.unshift()-- add a element in the begning of an array  elemant and in unshift we pass a parameter 
myArr.unshift(9)
//console.log(myArr);

//.shift()- in thus we cant pass the parameter and it is use to remove the elementy at the begning of an array element
myArr.shift()
//console.log(myArr);

//.includes()- it check the arrray that passes parameter has a value are present in an array or not 
//console.log(myArr.includes(8));// boolean data type 

//.indexOf()-it is use to find the index of given element if it is not present in an array it will produce -1 as output
//console.log(myArr.indexOf(3));


/* Array<number>.join(separator?: string): string Adds all the elements of an array into a string,
separated by the specified separator string.*/
const newArr=myArr.join()
console.log(myArr);//output as array //[ 0, 1, 2, 3, 4, 5 ]
console.log(newArr);// output as string //0,1,2,3,4,5
console.log(typeof newArr);//string

//slice
console.log("A",myArr);A [ 0, 1, 2, 3, 4, 5 ]
const myn1=myArr.slice(1,3)//1st include 2nd include 3rd not include 
console.log(myn1);[ 1, 2 ]
console.log("B",myArr);B [ 0, 1, 2, 3, 4, 5 ]

//.splice -- ye range ko alag array main print karta hai aur orignal array se delete kar dete hai means remaing elemain show only in an array
const myn2=myArr.splice(1,3)
console.log("C",myArr);//C [ 0, 4, 5 ]
console.log(myn2);//[ 1, 2, 3 ]
















