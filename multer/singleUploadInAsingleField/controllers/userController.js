const User = require("../model/userModel");
const multer = require("multer");
require("express-async-errors");

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/user");
  },
  filename: function (req, file, cb) {
    const extension = file.mimetype.split("/")[1];
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileName = `user-${uniqueSuffix}.${extension}`;
    cb(null, fileName);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[0] !== "image") {
    cb(new Error("Sorry only image can be accepted"), false);
  }
  cb(null, true);
};

// ! u can even set limits on file size
const multerLimit = {
  fileSize: 1 * 1024 * 1024, //  ^ i am setting  1 mb limit but this is optional set for me now
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  // limits: multerLimit,
});

exports.singlePhoto = upload.single("photo");

exports.getAllUser = async (req, res, next) => {
  const user = await User.find();
  res.status(200).json({
    status: "Success",
    data: user,
  });
};

exports.createUser = async (req, res, next) => {
  if (req.file) req.body.photo = req.file.filename;
  const user = await User.create(req.body);
  res.status(200).json({
    status: "Success",
    data: user,
  });
};
