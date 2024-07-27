const obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

//otherway

Object.keys(obj).forEach(key => {
    console.log(`${key}: ${obj[key]}`);

})