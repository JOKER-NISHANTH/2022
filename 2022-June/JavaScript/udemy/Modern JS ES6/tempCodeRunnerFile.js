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
