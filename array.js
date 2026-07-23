let arr = ["apple", "banana", "cherry", "blueberry", "dragon fruit"];
console.log(arr);

//accessing elements in the array
console.log(arr[0]);
console.log(arr.length);

//find array length
console.log(arr[arr.length - 1]);

//push
arr.push("fig");
console.log(arr);
console.log(arr.length);

//pop
let lastElement = arr.pop();
console.log(lastElement);
console.log(arr);

//shift
let firstElement = arr.shift();
console.log(firstElement);
console.log(arr);

//unshift
arr.unshift("apricot");

//indexof
let index = arr.indexOf("cherry");
console.log(index);

//includes
let hasCherry = arr.includes("cherry");
console.log(hasCherry);

//splice
arr.splice(2, 1, "coconut");

//sort - sorts the elements of an array in place
//reverse - reverse the order of elements of array

objext.keys()
{}

// synchronous v/s asynchronous operations 
console