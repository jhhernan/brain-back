require('dotenv').config();
const express = require("express");
const cors= require("cors");
const conversionRouter = require('./src/routes/conversion');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Server OK!");
})

app.use("/conversion", conversionRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(422).send(err.message);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
