const DBconnect = require("./mongodb");

const updateOne = async () => {
  const db = await DBconnect();
  const result = await db.updateOne(
    {
      name: "2 Product",
    },
    {
      $set: { name: "Mobile Product", category: "Mobile" },
    }
  );
  if (result.acknowledged) console.log("Data updated Successfully");
};

const updateMany = async () => {
  const db = await DBconnect();
  const result = await db.updateMany(
    {
      name: "3 Product",
    },
    {
      $set: { name: "Mobile Product", category: "Mobile" },
    }
  );

  if (result.acknowledged) console.log("Multiple Data Updated Successfully");
};
updateOne();
updateMany();
