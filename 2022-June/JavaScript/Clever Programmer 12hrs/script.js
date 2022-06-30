function first() {
    console.log("First");
    second()
}
function second() {
    console.log("second");
    third()
}
function third() {
    console.log("third");
}
first()