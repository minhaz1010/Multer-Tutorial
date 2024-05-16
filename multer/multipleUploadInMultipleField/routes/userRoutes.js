const express = require("express");
const {
  getAllUser,
  createUser,
  uploadPhoto,
} = require("../controllers/userController");
const router = express.Router();

router.route("/").get(getAllUser).post(uploadPhoto, createUser);

module.exports = router;
