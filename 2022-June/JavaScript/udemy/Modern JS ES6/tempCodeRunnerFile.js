const arr = [1, 2, 3, '4', 5, '6', 7, 8, 9];
let result = arr.filter((val) => {
    // return val % 2 == 0;
    return val % 2 === 0;
})
console.log(result)
