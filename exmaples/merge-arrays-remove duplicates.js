const arr1 = [1,3,5,6,8,10]
const arr2 =  [2,4,6,8,10]


let newArray = [... new Set([...arr1,...arr2])]
console.log({newArray})