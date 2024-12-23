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

// operations

let values=3
let negvalues=-values
console.log(negvalues);


let x="hetesh"
let y="xyz"
let s3=x+y
console.log(s3);

console.log("1"+ 2);
console.log(1+ "2");
console.log("1"+ "2");
console.log("1"+ 2+ 2);
console.log(1+ 2+"2");
console.log((3+5)*7%3);
console.log(true);
console.log(+true);//1
console.log(+"");//0

let num1,num2, num3
num1=num2=num3=2+2

let gameCounter=100
gameCounter++
console.log(gameCounter);//101
++gameCounter
console.log(gameCounter);//101+1

// ------------------------------------------------------------------------------------------

// Comparition of Database

console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);

console.log("2">1);
console.log("02">1);

console.log(null > 0);
console.log(null == 0);
console.log(null >=0);

// ===  => checks database along with the convertion

console.log("2"===2);


// ---------------------------------------------------------------------------------------------------

// //   Data Types of JS

// # Primitive

// 7 types:  String, NUmber, Boolean, Null, Undefined, Symbol, BigInt

const x_score=100
const x_scorevalue=100.3        
const X_islogged=false
const x_outside=null
let Email;
const id=Symbol('123')
const x_anotherid=Symbol('123')
console.log(id===x_anotherid);

const bigNumber=147896314562486524789n//will display all the numbers all together if "n" is put in the last
console.log(bigNumber);

// Reference/Non-Premitive: Array, Objects, Functions

const heros=["shau", "graha", "hdikd"]//array
let ab={
    name:"abc",
    age:25 
};//object

const myFunc=function(){
    console.log("Hello world");    
}//function


// ---------------------------------------------------------------------------------------------------

// stack(primitive) and heap(non-primitive) memory

let myYotube="heteshxyz"
let another=myYotube
another="chai"
console.log(myYotube);
console.log(another);

let user={
    email:"user@google.com ",
    upi:"user#ybl"
}
let user1=user
user1.email="hitesh@gmṇail.com"
console.log(user.email);
console.log(user1.email);

// ---------------------------------------------------------------------------------------------------

// Strings

const nameX="shikhar"
const nameY=50
console.log(nameX+nameY+" valeu");

console.log(`hello my name is ${nameX} and me number is ${nameY}`);

const game=new String('shikhatr-ch-ww')

console.log(game[0]);
console.log(game.__proton__);
console.log(game.length);

const newh=game.substring(0,5)
console.log(newh);

const newn=game.slice(-7,4)
console.log(newn);

const newx="          shi             "
console.log(newx);
console.log(newx.trim());

const url="https://htesch.com%20technocx"
console.log(url.replace('%20','-'));
console.log(url.includes("htesch"));

console.log(game.split('-'));

// ------------------------------------------------------------------------------------------------------

// Number and Maths

const goal=400
console.log(goal);


const balance=new  Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const other=23.234
console.log(other.toPrecision(3));//defines the limit to which the decimal can be counted freely

const hunderds=1000000
console.log(hunderds.toLocaleString('en-IN'));


// ################################___MATH___########################################

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(6.4));
console.log((Math.random()*100)+1);

const min=10;
const max=20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


//   ----------------------------------------------------------------------------------------------------------------

// date

let mydate=new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

console.log(typeof mydate);

let mynewdate=new Date(2024, 10, 14)
console.log(mynewdate.toDateString());

let mynedate=new Date(2024, 10, 14, 20, 3)
console.log(mynedate.toLocaleString());


let mytimestamp=Date.now()
console.log(mytimestamp);
console.log(mynewdate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()); //and many more functions are there like this in js which will give us daay hour etc.

newDate.toLocaleString('default',{
    weekday: "long",
})
console.log(newDate);

// --------------------------------------------------------------------------------------------