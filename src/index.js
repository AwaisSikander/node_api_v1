/* CREATING APP INSTANCE */
const express = require("express");
const app = express();

/* REGISTERING PATH ALIAS */
require("module-alias/register");

/* REGISTERING ROUTES */
const userRouter = require("@routes/users");
const errorMiddleware = require("@middlewares/error");
const ErrorHandler = require("@utils/errorhandler");

/* CONFIGURING APP */
app.use(express.json());

/* USING ROUTES */
app.use("/", userRouter);
// PAGE NOT FOUND
app.get("*", (req, res, next) => {
  next(new ErrorHandler("page not found!!!", 404));
});
/* ERROR HANDLING */
app.use(errorMiddleware);
/* LISTENING TO REQUESTS */
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
