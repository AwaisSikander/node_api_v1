const DBconnect = require("./mongodb");

const getAllData = async () => {
  const db = await DBconnect();
  const data = await db.find({}).toArray();
  if (data) {
    console.log("Data Fetched Successfully");
    console.log(data);
  }
};

getAllData();
