const express = require("express");
const { rootRouter } = require("./src/Routers/RootRouter");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world");
});

app.use("/api/v1", rootRouter);

app.listen(9000, () => {
    console.log("ket noi port 9000 thanh cong");
});
