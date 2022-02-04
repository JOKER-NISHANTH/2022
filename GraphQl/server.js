const { graphql, buildSchema } = require("graphql");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const schema = buildSchema(`
    type Query {
        name: String,
        email:String,age:String,
    }
`);

const rootValue = {
    name: () => {
        return "Nishanth";
    },
    email: () => {
        return "hacker@gmail.com"
    }
};

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        graphiql: true,
        rootValue: rootValue
}));

app.listen(8000);
console.log("Server is running at http://localhost:8000");

/*
Use frontent
const result = await fetch("graphql", {
    "method": "POST",
    "headers": {
        'Content-Type':'application/json',
        'accept':'application/json',
},
body: JSON.stringify({ query: "{name,email}" })
})

result

const data = await result.json()

data

*/