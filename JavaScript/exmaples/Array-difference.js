

const ArrayFirst = [1,3,5,6,8,10]
const ArraySecond = [2,4,6,8,10]

const ArrayDifference = [
    ... ArrayFirst.filter(value => !ArraySecond.includes(value)),
    ... ArraySecond.filter(value => !ArrayFirst.includes(value))
]
console.log({ArrayDifference})



//  Second method 



function arrayDiff(a, b) {
    return [
        ...a.filter(x => b.indexOf(x) === -1),
        ...b.filter(x => a.indexOf(x) === -1)
    ]
}
console.log('arrayDiff',arrayDiff(ArrayFirst, ArraySecond)) 






const arr1 = [1,3,5,6,8,10]
const arr2 =  [2,4,6,8,10]

let arraydiff = [...arr1.filter(a=> !arr2.includes(a)),
    ...arr2.filter(b=>!arr1.includes(b))]
console.log({arraydiff})


