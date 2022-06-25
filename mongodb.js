const { MongoClient } = require("mongodb");

const dbUrl = "mongodb://localhost:27017";

const client = new MongoClient(dbUrl);

const dataBaseName = "api_v1";

async function DBconnect() {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dataBaseName);
  const collection = db.collection("products");

  return collection;
}

module.exports = DBconnect;
