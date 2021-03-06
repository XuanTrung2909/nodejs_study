const express = require("express");
const path = require("path");
const { rootRouter } = require("./src/Routers/RootRouter");

const app = express();

//setup graphql

const { graphqlHTTP } = require("express-graphql");
const { graphqlSchema } = require("./src/graphql/schema");
const { graphqlResolver } = require("./src/graphql/resolvers");

app.use(
    "/graphql",
    graphqlHTTP({
        schema: graphqlSchema,
        rootValue: graphqlResolver,
        graphiql: true, //bat tool len de dung
    })
);

//setup statuc file

const publicPathDirectory = path.join(__dirname, "./public");

app.use("/public", express.static(publicPathDirectory));

//truy cap hinh

/**
 *
 * http://localhost:9000 <=> public
 *
 */

//setup json

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world");
});

app.use("/api/v1", rootRouter);

app.listen(9000, () => {
    console.log("ket noi port 9000 thanh cong");
});
