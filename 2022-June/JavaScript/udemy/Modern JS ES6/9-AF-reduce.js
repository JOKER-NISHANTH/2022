console.log("REDUCE Higher order function")
// *-----------------------------------------------------------------------
// arr.reduce(()=>{},default_value) -> default_value is 0
const arr = [1, 2, 3, 4, 5]
let result = arr.reduce((acc, item) => {
    console.log(`Item : ${item}`)
    console.log(`Acc : ${acc}`)
},0)

// *-----------------------------------------------------------------------
const arr = [1, 2, 3, 4, 5]
let result = arr.reduce((acc, item) => {
    console.log(`Item : ${item}`)
    console.log(`Acc : ${acc}`)
    return acc;
},0)

// *-----------------------------------------------------------------------
const arr = [1, 2, 3, 4, 5]
let result = arr.reduce((acc, item) => {
    console.log(`Item : ${item}`)
    console.log(`Acc : ${acc}`)
    return acc + 1;
},0)
// *-----------------------------------------------------------------------
const arr = [1, 2, 3, 4, 5]
let result = arr.reduce((acc, item) => {
    console.log(`Item : ${item}`)
    console.log(`Acc : ${acc}`)
    return acc + item;
},0)
console.log(result)
