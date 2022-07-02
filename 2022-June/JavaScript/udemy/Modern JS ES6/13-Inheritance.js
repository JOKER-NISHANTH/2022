
console.log("Inheritance")
class Person{
    constructor(name, birthYear) {
        this.name = name;
        this.yearOfBirth = birthYear;
    }
    getDetails  () {
        return `Name ${this.name} and Age ${2022 - this.yearOfBirth}`
    }
}
class Pilot extends Person{
    constructor(name,year,exp, type, license) {
        super(name,year); // !NOTE
        this.experience = exp;
        this.type = type;
        this.license = license;
    }
    getData() {
        console.log(`Details ${this.getDetails()}\nExperience ${this.experience} and type ${this.type}`);
    }
}
const obj1 = new Pilot("Mr Black",2000,10,"private jets","TC12345");
obj1.getData()
console.log(obj1);
