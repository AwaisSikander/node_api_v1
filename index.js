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

app.get("/list", async (req, res) => {
  let data = await Products.find();
  res.send(data);
});

app.delete("/delete/:_id", async (req, res) => {
  let data = await Products.deleteOne(req.params);
  res.send(data);
});

app.listen(5000);
