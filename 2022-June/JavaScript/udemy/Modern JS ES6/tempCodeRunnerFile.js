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
console.log(result)