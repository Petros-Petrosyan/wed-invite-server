const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/");
  },
  filename: (req, file, cb) => {
    const {
      user: { id },
    } = req;

    cb(null, `__${id}__.jpeg`);
  },
});

const fileFilter = (req, file, cb) => {
  const types = ["image/png", "image/jpeg", "image/jpg"];
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports = multer({ storage, fileFilter });
