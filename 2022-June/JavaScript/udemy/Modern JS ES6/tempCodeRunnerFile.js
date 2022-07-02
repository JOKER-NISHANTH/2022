const arr = [1, 2, 3, 4, 5]
let result = arr.reduce((acc, item) => {
    console.log(`Item : ${item}`)
    console.log(`Acc : ${acc}`)
    return acc + item;
},0)
console.log(result)
