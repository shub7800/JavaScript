const marval_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

//marval_heros.push(dc_heros)
//console.log(marval_heros);//it will merge dc as a element 
//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]


//merge two array  
const allheros=marval_heros.concat(dc_heros)
console.log(allheros);

//easy way two merge 
//sprade method -- ...ArrayName
const all_new_hero=[...marval_heros,...dc_heros]
console.log(all_new_hero);

//.flat()- it is use to seprate as single array
const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realanotherArray=anotherArray.flat(Infinity)
console.log(realanotherArray);
/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
   */


//.isArray()-- is used to check given input is array or not 
console.log(Array.isArray("shubham"))//false
//.from()-- it canvert the different datatype into array from differnt source 
console.log(Array.from("shubham"));
//The Array.from() static method creates a new, shallow-copied Array instance 
//from an iterable or array-like object.
/*
    [
  's', 'h', 'u',
  'b', 'h', 'a',
  'm'
]
*/

  



