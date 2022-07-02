const nSum = (...args) => {
    let result = 0;
    for (const num of args) {
    // for (const num in args) {
        result += num
    }
    // return {result}
    return result
}
// console.log(nSum(1,2,3,4,5,6,7,8,9))
// !-----------------------------------------------------------------
const totalBill = (name, ...args) =>  `Hello! ${name} your bill was ${nSum(...args)}rs`
console.log(totalBill("Mr Black",10,20,30,40))