const DBconnect = require("./mongodb");

const deleteOne = async () => {
  const db = await DBconnect();
  const result = await db.deleteOne({
    name: "Mobile Product",
  });
  if (result.acknowledged) console.log("Data deleted Successfully");
};

const deleteMany = async () => {
  const db = await DBconnect();
  const result = await db.deleteMany({
    name: "Mobile Product",
  });

  if (result.acknowledged) console.log("Multiple Data deleted Successfully");
};
deleteOne();
deleteMany();
