const catchAsyncErrors = require("@middlewares/catch-async-errors");
const UserService = require("@services/user-service");
const UserDatabase = require("@databases/user-database");
/* CONFIG */
const config = require("@configs/database");
const userDatabase = new UserDatabase(config);
const userService = new UserService(userDatabase);

exports.getUserSpecificDetails = catchAsyncErrors(async (request, response) => {
  const { column } = request.params;
  const users = await userService.getUsersColumn(column);
  response.json({ users });
});

exports.whereInRawQuery = catchAsyncErrors(async (request, response) => {
  const users = await userService.whereInRawQuery();
  response.json({ users: users[0] });
});

exports.getAllUsers = catchAsyncErrors(async (request, response) => {
  const users = await userService.getAllUsers();
  response.json({ users: users });
});

exports.createUser = catchAsyncErrors(async (request, response) => {
  const users = await userService.createUser(request.body);
  response.json({ user: users });
});
