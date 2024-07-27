let array = [1, 2, 3, 4, 5, 3, 2, 1];
let uniqueArray = [...new Set(array)];
console.log(uniqueArray); // [1, 2, 3, 4, 5]

const usingfilter = array.filter((value,index) => array.indexOf(value)==index)
console.log({usingfilter})

let array_0 = [1,1,2,2,3,4,5,5,0,0,6,7,7,8,9,9]
let uniquear = [...new Set(array_0)]
console.log({uniquear});