let text = "Hello world nishanth";
let regex1 = new RegExp("Hello");
let regex2 = /world/;

console.log(regex1.test(text));
console.log(regex2.test(text));

// 2 Object
// test - return true or false if the match is found for yhe pattern
// exec - return the array with match and the index

console.log(regex1.exec(text));
console.log(regex2.exec(text));

// String Methods
// match -> returns the array same as exec
// search -> returns the index of the match
// replace -> replaces the text with the specified text
// split -> split the text into array with the match

console.log("String Methods");
console.log(text.match(regex2));

// Search return the Index (-1 means searching element is not present)
console.log(text.search(regex1));
console.log(text.search(regex2));
regex1 = "hello";
console.log(text.search(regex1));

// Note:  replace is return the new string
console.log(text.replace(regex2, "Replaced 🧡"));

// Note:  split is return array of splitted element
let regex3 = /\s/;
console.log(text.split(regex3));
console.log(text.split(regex2));
console.log(text.split(" "));
