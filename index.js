const express = require("express");
/* CONNETING DB */
require("./config");
/* IMPORTING COLLECTION */
const Products = require("./products");

const app = express();

app.use(express.json());

app.post("/create", async (req, res) => {
  let data = new Products(req.body);
  let result = await data.save();
  res.send(result);
});
app.listen(5000);
