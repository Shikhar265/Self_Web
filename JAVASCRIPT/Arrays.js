// Array

const arr=[1,2,3,4,5,6,7,8,9]
const myarr=["shjsj","huuhhu"]
const arr2=new Array(1,2,3,4)

console.log(arr[0])
console.log(myarr[0]);

// Array Methods

arr.push(6)//add value at last
arr.pop()//remove last value
arr.unshift(0)//add values at the start of the array
arr.shift(0)//remove values at the start of the array
console.log(arr.includes(9));//gets boolean values
console.log(arr.indexOf(3));//gives the position of the values

const newarr=arr.join()

console.log(arr);
console.log(newarr);
console.log(typeof(newarr));

// slice,splice 

console.log("A",arr);

const myarr1=arr.slice(1,3)
console.log(myarr1);
console.log("B",arr);

const myarr2=arr.splice(1,3)
console.log(myarr2);
console.log("C",arr);