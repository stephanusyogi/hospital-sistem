const jwt = require("jsonwebtoken");
const Nurse = require("../models/nurses");
const Doctor = require("../models/doctors");

const protectNurse = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const nurse = await Nurse.findById(decodedToken.userId);
    const doctor = await Doctor.findById(decodedToken.userId);

    if (nurse) {
      req.user = { userId: nurse._id };
      next();
    } else if (doctor) {
      req.user = { userId: doctor._id };
      next();
    } else {
      throw new Error("Invalid token");
    }
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
};

module.exports = protectNurse;
