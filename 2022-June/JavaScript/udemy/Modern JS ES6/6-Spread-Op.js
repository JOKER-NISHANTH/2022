console.log("Spread Operator");

// Copy of array or object
//! In js we know that reference issue
let arr3 = [1, 2, 3, 4, 5];
let arr4 = arr3;
console.log(`before push Array 3 : ${arr3}`)
console.log(`before push Array 4 : ${arr4}`)
arr3.push("Mr Black")
console.log(`after push Array 3 : ${arr3}`)
console.log(`after push Array 4 : ${arr4}`)

console.log("\n")

//? Call by value
//TODO:  Shallow copy
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1];
console.log(`before push Array 1 : ${arr1}`)
console.log(`before push Array 2 : ${arr2}`)
arr1.push("Mr Black")
console.log(`after push Array 1 : ${arr1}`)
console.log(`after push Array 2 : ${arr2}`)

// !------------------------------------------------------

let a = [11, 22, 33, 44, 55];
let b = [66, 77, 88, 99];
let c = a.concat(b)
console.log(c);
let d = [...a,...b]
console.log(d);
d = ["Adding 1st",...a,...b] // push item beginning of the array
console.log(d);
d = [...a,...b,"Adding end"] // push item ending of the array
console.log(d);

// !-----------------------------------------------------

// Let play with objects

let obj1 = {
    name:"Mr Black",
    age:21
}
let obj2 = {
    name:"Mr Brown",
    age:22
}
let obj3 = { ...obj1, ...obj2 };
console.log(obj3); //? same key, so print last or least one

// --------
let obj1 = {
    fname:"Mr Black",
    lname:"007"
}
let obj2 = {
    skill:"h4ck1ng",
    age:22
}
let obj3 = { ...obj1, ...obj2 };
console.log(obj3);
