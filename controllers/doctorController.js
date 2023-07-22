const bcrypt = require("bcryptjs");

const User = require("../models/users");

const createDoctor = async (req, res) => {
  try {
    const { name, email, spesialis, password } = req.body;

    if (!name || !email || !spesialis || !password) {
      throw new Error("This field are required!");
    }

    const existingUser = await User.findOne({ $or: [{ email }] });

    if (existingUser) {
      throw new Error("User already exist with this email!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      spesialis,
      role: "Dokter",
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

const getDoctor = async (req, res) => {
  try {
    const doctors = await User.find({ role:"Dokter", accountActive: true });

    res.status(200).send(doctors);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await User.findById(id);

    if (!id) {
      throw new Error("User not found!");
    }

    res.status(200).send(doctor);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;

    const updatedFields = req.body;

    const updatedUser = await User.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ user: updatedUser });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updatePasswordDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;
    const { newPassword } = req.body;

    const user = await User.findById(userId);

    const hashPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashPassword;

    user.save();

    res.status(200).send({ message: "Password updated succesfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;

    const updatedFields = {
      accountActive: false,
    };

    const deletedUser = await User.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ user: deletedUser });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createDoctor,
  getDoctor,
  getDoctorById,
  updateDoctor,
  updatePasswordDoctor,
  deleteDoctor,
};
