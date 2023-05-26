const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Nurse = require("../models/nurses");

const loginNurse = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Nurse.findOne({ email });

    if (!user) {
      throw new Error("User Not Found!");
    }
    // Comparing user password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Password don't match");
    }

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.status(200).send({ token, id: user.id });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const logoutNurse = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createNurse = async (req, res) => {
  try {
    const { name, email, role, password } = req.body;

    if (!name || !email || !role || !password) {
      throw new Error("This field are required!");
    }

    const existingUser = await Nurse.findOne({ $or: [{ email }] });

    if (existingUser) {
      throw new Error("User already exist with this email!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Nurse({
      name,
      email,
      password: hashedPassword,
      role,
      accountActive: true,
    });

    const savedUser = await newUser.save();
    res
      .status(200)
      .send({ message: "User created successfully", user: savedUser });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getNurse = async (req, res) => {
  try {
    res.json({ message: "Uhuyy!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getNurseById = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateNurse = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updatePasswordNurse = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteNurse = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  loginNurse,
  logoutNurse,
  createNurse,
  getNurse,
  getNurseById,
  updateNurse,
  updatePasswordNurse,
  deleteNurse,
};
