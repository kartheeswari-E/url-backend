const express = require("express");
require('dotenv').config();
const db = require("./db/connect");
const app = express();
const registerurl = require("./route/printurl");
db();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;
app.get("/", function(req, res) {
  res.send("hai");
});
app.use("/api", registerurl);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
