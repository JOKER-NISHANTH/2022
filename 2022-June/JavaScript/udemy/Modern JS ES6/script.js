console.clear()

function greeting (name){
    console.log(`Welcome ${name}`)
}

// fat arrow

const aGreeting1 = (name) =>{
    console.log(`Welcome ${name}`)
}

// single args explicit return
const aGreeting2 = name =>{
    return `Welcome ${name}`
}
// single args with implicit return
const aGreeting3 = name => `Welcome ${name}`


greeting("Mr Black")
aGreeting1("Mr Brown")
console.log(aGreeting2("Mr Blue"));
console.log(aGreeting3("Mr Red"));