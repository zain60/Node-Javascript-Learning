
// Variable declarations // 

var Name = "zain";
let Age = 25;
const Address = "Pallandri azad kashmier" 

console.log({Name,Age,Address})


// Variables scops //

const  chnageAge = (params) =>{
    Age = params
};
chnageAge(26);

const  chnageAddress = (params) =>{
    Address = params
};
//chnageAddress("islamabad"); threw error => { Assignment to constant variable.}

const  chnageName = (params) =>{
    Name = params
};
chnageName("zain ul Abdeen")
console.log({Name,Age,Address})
