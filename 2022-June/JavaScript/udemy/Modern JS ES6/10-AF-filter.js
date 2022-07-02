console.log("Filter Higher order function")

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = arr.filter((val) => {
    // return true // all item
    return false // empty []
})
console.log(result)
// *-----------------------------------------------------------------------

// *-----------------------------------------------------------------------

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = arr.filter((val) => {
    return val % 2 == 0;
})
console.log(result)
// *----------------------------------//Array of Object *-------------------------
const data = [
    { name: "Mr Black", exp: 8,hobbies:"Play Game", },
    { name: "Mr Brown", exp: 5,hobbies:"Cooking", },
    { name: "Mr Blue", exp: 10,hobbies:"Reading", },
    { name: "Mr Red", exp: 15,hobbies:"Arts work", },
]
console.log(data.filter(f => f.exp > 5).map(m =>  m.name));