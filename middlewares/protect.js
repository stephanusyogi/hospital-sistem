const jwt = require("jsonwebtoken");
const User = require("../models/users");

const multer = require("multer");

const protectUsers = async (req, res, next) => {
  try {
    // Apabila menggunakan multipart/form-data
    const contentType = req.headers['content-type'];
    const checkContentType = contentType?.startsWith('multipart/form-data')
    if (contentType || checkContentType) {
      const upload = multer().any()
      upload(req, res, (err) => {
        if (err) {
          // Error dalam pengolahan multer
          return res.status(400).json({ error: 'Error uploading files' });
        }
      });
    }

    const token = req.header("Authorization")?.replace("Bearer ", "");
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decodedToken.userId);

    if (user) {
      req.user = { userId: user._id };
      next();
    } else {
      throw new Error("Invalid token");
    }
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
};

module.exports = protectUsers;
