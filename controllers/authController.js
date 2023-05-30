const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Nurse = require("../models/nurses");
const Doctor = require("../models/doctors");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const nurse = await Nurse.findOne({ email });
    const doctor = await Doctor.findOne({ email });

    if (nurse) {
      // Comparing user password
      const isMatch = await bcrypt.compare(password, nurse.password);

      if (!isMatch) {
        throw new Error("Password don't match");
      }

      if (!nurse.accountActive) {
        throw new Error("User account is currentyl innactive");
      }

      const token = jwt.sign(
        {
          userId: nurse._id,
          email: nurse.email,
        },
        process.env.JWT_SECRET
      );
      res.status(200).send({ token, id: nurse.id });
    } else if (doctor) {
      // Comparing user password
      const isMatch = await bcrypt.compare(password, doctor.password);

      if (!isMatch) {
        throw new Error("Password don't match");
      }

      if (!doctor.accountActive) {
        throw new Error("User account is currentyl innactive");
      }

      const token = jwt.sign(
        {
          userId: doctor._id,
          email: doctor.email,
        },
        process.env.JWT_SECRET
      );
      res.status(200).send({ token, id: doctor.id });
    } else {
      throw new Error("User Not Found!");
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  login,
};
