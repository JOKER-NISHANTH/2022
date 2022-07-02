const arr = [-1,-2,-3,-4,0,1, 2, 3, 4];
let result = arr.findIndex(item => {
    return (item % 2 ===0 && item > 0)
})
console.log(`Result : => ${result}` )
