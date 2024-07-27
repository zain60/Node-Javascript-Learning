// const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

// getRandomNumber(2, 10)

//  // Returns a random number(int) between min (inclusive) and max (inclusive)

const getRandomNumberInclusiveold =(min, max)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomNumberInclusiveold(2, 10);


const getRandomNumberInclusive = (min,max)=>{
   min =  Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

let Result = getRandomNumberInclusive(2,10);
console.log("Random number",Result)
let Resultold = getRandomNumberInclusiveold(2,10);
console.log("Random number Resultold",Resultold)