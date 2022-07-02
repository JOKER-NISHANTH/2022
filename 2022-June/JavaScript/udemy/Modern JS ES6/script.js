console.log("MAP Higher order function")
// *-----------------------------------------------------------------------

const arr = [1, 2, 3, 4, 5]
let result=[]
for (const n of arr) {
    result.push( n * 2)
}
console.log(result)

// *-----------------------------------------------------------------------

const arr = [1, 2, 3, 4, 5];
let result = [];

const doubleValue = (value) => value * 2;

for (const n of arr) {
    result.push(doubleValue(n));
}
console.log(result);


// *-----------------------------------------------------------------------
/**
 * ! MAP return new ARRAY
 * ? map(item,itemIndex)
 */
let arr = [10, 20, 30, 40, 50]
const result = arr.map( v => v / 10);
console.log(result)

// *-----------------------------------------------------------------------

let arr = [10, 20, 30, 40, 50]
const result = arr.map(function (v) {
    return v / 10;
});
console.log(result)

// *-----------------------------------------------------------------------

let arr = [10, 20, 30, 40, 50]
const result = arr.map(  (v) => {
    return v / 10;
});
console.log(result)

// *-----------------------------------------------------------------------

let arr = [10, 20, 30, 40, 50]
console.log(arr.map( (item,itemIndex) => `Item at pos: ${itemIndex} is ${item}`));

// *-----------------------------------------------------------------------

console.log([10, 20, 30, 40, 50].map((item, itemIndex) => `Item at pos: ${itemIndex} is ${item}`));

// *----------------------------------//Array of Object *-------------------------
const data = [
    {
    name: "Mr Black",
    exp: 8,
    hobbies:"Play Game",
    },
    {
    name: "Mr Brown",
    exp: 5,
    hobbies:"Cooking"
    }
]
// console.log(data.map((value) => value.name))
let result = data.map((item) => {
    return {
        name: item.name,
        exp:item.exp
    }
})
console.log(result) //! return array
// *-----------------------------------------------------------------------