const { buildSchema } = require("graphql");

const graphqlSchema = buildSchema(`
    type users{
        id: Int!
        name: String!
        email: String!
        password: String!
        phone: String!
        role: String!
        avatar: String!
    }

    type rootQuery{
        user(id: Int): users!
    }

    schema{
        query: rootQuery
    }
`);

module.exports = {
    graphqlSchema,
};
