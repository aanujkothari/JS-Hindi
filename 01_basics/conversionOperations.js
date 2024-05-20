"use strict";
/*
let myNum = 33;
let yourNum = "33";

console.log(typeof myNum);
console.log(typeof(yourNum));

console.log(typeof(Number(yourNum)))

console.log(typeof(NaN))
console.log(typeof(true))
*/

// 1 => true, 0=> false
// " " => false
// "Anuj123" => true


// ************Operations************

let str1 = "Anuj"
let str2 = " Kothari"

console.log(str1 + str2);

console.log("3" + 2 + 1); //321, If the first value is String, then all the other values are treared as String if () are not used.
console.log("3" + (2 + 1)); //33, () are used
console.log(3 + "2" + 1); //321
console.log(3 + 2 + "1"); //51