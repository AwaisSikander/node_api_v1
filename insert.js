const DBconnect = require("./mongodb");

const insertOne = async () => {
  const db = await DBconnect();
  const result = await db.insertOne({
    name: "Product",
    title: "Mango",
    category: "Fruit",
  });
  if (result.acknowledged) console.log("Multiple Data Inserted Successfully");
};

const insertMany = async () => {
  const db = await DBconnect();
  const result = await db.insertMany([
    {
      name: "2 Product",
      title: "Mango",
      category: "Fruit",
    },
    {
      name: "3 Product",
      title: "Apple",
      category: "Fruit",
    },
  ]);
  if (result.acknowledged) console.log("Multiple Data Inserted Successfully");
};
insertOne();

insertMany();
