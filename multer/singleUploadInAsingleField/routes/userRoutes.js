const express = require("express");
const {
  getAllUser,
  singlePhoto,
  createUser,
} = require("../controllers/userController");
const router = express.Router();

router.route("/").get(getAllUser).post(singlePhoto, createUser);

module.exports = router;
