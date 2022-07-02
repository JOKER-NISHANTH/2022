console.log("Find and FindIndex")

// *-----------------------------------------------------------------------
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = arr.find(item => {
    // console.log(item);
    // return true
    return false
})
console.log(`Result : => ${result}` )


// *-----------------------------------------------------------------------
const arr = [-1,-2,-3,-4,0,1, 2, 3, 4];
let result = arr.find(item => {
    return item % 2 ===0
})
console.log(`Result : => ${result}` )
// *-----------------------------------------------------------------------
const arr = [-1,-2,-3,-4,0,1, 2, 3, 4];
let result = arr.find(item => {
    return (item % 2 ===0 && item > 0)
})
console.log(`Result : => ${result}` )

// *-----------------------------------------------------------------------
// ! findIndex
const arr = [-1,-2,-3,-4,0,1, 2, 3, 4];
let result = arr.findIndex(item => {
    return (item % 2 ===0 && item > 0)
})
console.log(`Result : => ${result}` )
