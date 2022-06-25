const mongoose = require("mongoose");
/* DATABASE CONFIGS */
const dbUrl = "mongodb://localhost:27017";
const dataBaseName = "api_v1";
/* DATABASE CONNECTS */
mongoose.connect(`${dbUrl}/${dataBaseName}`);
