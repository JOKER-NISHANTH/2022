// Regular expression is an object in Javascript Many things in javascript are Objects
//  Two to create a RE
    // One is literal Syntax
        // let regex2 = /word/;
    // other is using constructor
        // let regex1 = new RegExp("hello")

let text = "Hello world nishanth";
let regex1 = new RegExp("Hello")
let regex2 = /world/;

console.log(regex1.test(text))
console.log(regex2.test(text));