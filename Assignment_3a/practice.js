const path = require("path");
const express = require("express");
const port = 3000;
const app = express();

const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.listen(port, () => console.log(`server ${port}`));