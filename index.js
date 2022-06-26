const express = require("express");
const multer = require("multer");

const app = express();

app.use(express.json());

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, res, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "." + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

app.post("/upload", upload, async (req, res) => {
  let data = new Products(req.body);
  let result = await data.save();
  res.send(result);
});

app.listen(5000);
