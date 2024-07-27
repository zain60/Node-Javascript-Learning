
let array = [1, 2, 3, 4, 5];
array.splice(4, 1); // removes 1 element at index 4      
console.log(array);

let array1 = [1, 2, 3, 4, 5];

array1 = array1.filter(item => item !== 3); // removes elements with value 3
console.log(array1); // [1, 2, 4, 5]

let array2 = [1, 2, 3, 4, 5];
array2 = array2.slice(0,2).concat(array2.slice(3))
console.log(array2); // [1, 2, 4, 5]
