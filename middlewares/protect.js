const jwt = require("jsonwebtoken");
const User = require("../models/users");

const protectUsers = async (req, res, next) => {
  try {
    // Apabila menggunakan multipart/form-data
    // const contentType = req.headers['content-type'];
    // const checkContentType = contentType?.startsWith('multipart/form-data')
    // if (checkContentType) {
    //   const multer = require("multer");
    //   req.multer = { 
    //     upload: multer({ storage: multer.memoryStorage() }).single("file")
    //   };
    //   next();
    // }

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
