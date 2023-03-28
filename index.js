var express = require("express");
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "password",
    database: "knex",
  },
});
var app = express();

app.get("/users", async (req, res) => {
  const result = await knex.select("first_name").from("users");
  res.json({
    users: result,
  });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
