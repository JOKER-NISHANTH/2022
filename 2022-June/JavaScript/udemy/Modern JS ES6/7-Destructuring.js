console.log("Destructuring");
// *-----------------------------------------------------------------------------------------
// ! Array []
const name = "Mr Black 007";
console.log(name)
const nameArr = name.split(" ")
console.log(nameArr)
// *-----------------------------------------------------------------------------------------
// const [fname, surname, nickname] = nameArr;
const [, surname, nickname] = nameArr;
// console.log(fname);
console.log(surname);
console.log(nickname);

// *-----------------------------------------------------------------------------------------
// ! Object {}
const person = {
    fname: "Mr ",
    surname: "Black",
    nickname: "007",
    age:22
}
const { surname, age} = person;
console.log(`${surname} was ${age} year old `);
// *-----------------------------------------------------------------------------------------
//! Destructuring with alias
const { surname: sname, age: a } = person;
console.log(`${sname} was ${a} year old `);
// *-----------------------------------------------------------------------------------------
// | Creating Objects
let fname= "Mr "
let surname = "Black"
let age = 22
const personObj = {
    fname:fname,
    surname:surname,
    age:age
}
console.log(personObj)
// *-----------------------------------------------------------------------------------------
let fname= "Mr "
let surname = "Black"
let age = 22
const personObj = {
    fname,
    surname,
    age
}
console.log(personObj)
// *-----------------------------------------------------------------------------------------