function greet(name){
  console.log(`Hello ${name}`)
}

function higherOrderFunction(callbackfunc){
  const name = "zain"
  callbackfunc(name)
}

higherOrderFunction(greet);