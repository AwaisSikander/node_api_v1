const express = require("express");

const {
  getUserSpecificDetails,
  whereInRawQuery,
  getAllUsers,
  createUser,
} = require("@controllers/user-controller");

const router = express.Router();

router.route("/users/:column").get(getUserSpecificDetails);
router.route("/users/where-in").get(whereInRawQuery);
router.route("/users/all").get(getAllUsers);
router.route("/users/store").post(createUser);

module.exports = router;
