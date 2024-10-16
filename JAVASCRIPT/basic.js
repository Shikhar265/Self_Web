// const -> varible declaired here does not change lateron
const accountId= 12345
// let -> varible declaired here does change lateron
let accountEmail="abc@gmail.com"
// var -> varible declaired here does change lateron but prefered not to use because of issue in block space an dfunctional scope
var accountpassword="1234"
// variable can be declaired like this also to reserve a space
accountcity="jaipur"
// variable can be declared like this who has no values assiened but still book a space
let abc;

console.log(accountId);
console.log(accountEmail);
console.log(accountpassword);

console.table([accountId,accountEmail,accountpassword,abc]);

// -----------------------------------------------------------------------------------------

"use strict"; //treat all jscode as newer version

// alert(3+3)//generate allert on the browser

// -----------------------------------------------------------------------------------------

// // Datatypes
// // Types Of Datatypes

// 1. Number => 2 to power 53
// 2. bigint
// 3. String => "string"
// 4. Boolean => true/false
// 5. Null => null
// 6. undefiner=>
// 7. symbol=> unique

// 
let name="hitesh"
let age= 18
let isMarried=false

// -----------------------------------------------------------------------------------------

// object

console.log(typeof(age));
console.log(typeof(undefined));//undefined
console.log(typeof(null));//object


// -----------------------------------------------------------------------------------------

// funtions

let score=0
// let score=undefined //nan
// let score=true //1
let score1="33abc"//nan

// example with unnone variable type: const{score}= req.body

console.log(typeof (score));
console.log(typeof (score1));

let value=Number(score)
console.log(typeof(value));
console.log(value);

// let isLoggedin=1//true
// let isLoggedin=0//false
// let isLoggedin=""//false
let isLoggedin="abc"//true
let bool=Boolean(isLoggedin)
console.log(bool);

let some=33
let str=String(some)
console.log(str);
console.log(typeof(str));

// -----------------------------------------------------------------------------------------

// oerations

