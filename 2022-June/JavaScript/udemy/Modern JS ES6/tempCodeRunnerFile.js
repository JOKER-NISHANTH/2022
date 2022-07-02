console.log("Class");
class Person{
    constructor(name, birthYear) {
        this.name = name;
        this.yearOfBirth = birthYear;
    }
    getDetails  () {
        return `Name ${this.name} and Age ${2022 - this.yearOfBirth}`
    }
}
const obj1 = new Person("Mr Black", 2000);
// console.log(obj1.getDetails)
console.log(obj1.getDetails())
