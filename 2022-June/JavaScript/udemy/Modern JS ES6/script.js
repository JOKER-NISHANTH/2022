console.clear()

// Rest Operator

const mSum = (num1,num2) => console.log(num1+num2)
mSum(1, 2, 3, 4, 5);
//  o/p 3 -> 1st and 2nd args only accepted reset of args are ignore

/*
 * Rest Operator
 * ! Rest operator is like *args in Python
 * * Its combine the n args and form the array
 * ? Rest parameter must be last formal parameters
 */
// TODO : Do some research on Rest Operator
//? Formal parameters is nothing but, Parameters in function or methods
//? Actual parameters is Arguments in function or methods

const singleStarInPython = (...args) => console.log(args)
singleStarInPython(1, 2, 3, 4, 5); // return array


// Sum of n numbers using REST Operator
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