// Arrays in javascript provide you an ordered collections data

var arr = [1, 'abs',3,'xyz',true, 12.5];
console.log("array is :- " , arr);

arr[1] = 'pqr';
console.log("array is :- " , arr);

// inbuilt javascript array methods
// pop method
arr.pop();
console.log("poped array is :- " , arr);

//push method
arr.push(234);
console.log("pushed array is :- " , arr);

//shift method
var d = arr.shift();
console.log("shifted value ", d);
console.log("shifted array is :- " , arr);

//unshift method
arr.unshift(102);
console.log("unshifted array is :- " , arr);