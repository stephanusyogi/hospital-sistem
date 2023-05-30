const bcrypt = require("bcryptjs");

const Doctor = require("../models/doctors");

const createDoctor = async (req, res) => {
  try {
    const { name, email, spesialis, password } = req.body;

    if (!name || !email || !spesialis || !password) {
      throw new Error("This field are required!");
    }

    const existingUser = await Doctor.findOne({ $or: [{ email }] });

    if (existingUser) {
      throw new Error("User already exist with this email!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Doctor({
      name,
      email,
      password: hashedPassword,
      spesialis,
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
    const doctors = await Doctor.find({ accountActive: true });

    res.status(200).send(doctors);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findById(id);

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

    if (userId.toString() !== id) {
      throw new Error("You can only update your account!");
    }

    const updatedFields = req.body;

    const updatedUser = await Doctor.findByIdAndUpdate(id, updatedFields, {
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
    const { currentPassword, newPassword } = req.body;

    if (userId.toString() !== id) {
      throw new Error("You can only update your account!");
    }

    const user = await Doctor.findById(userId);

    if (!id) {
      throw new Error("User not found!");
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);

    if (!isMatch) {
      throw new Error("Password don't match");
    }

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

    if (userId.toString() !== id) {
      throw new Error("You can only delete your account!");
    }

    const updatedFields = {
      accountActive: false,
    };

    const deletedUser = await Doctor.findByIdAndUpdate(id, updatedFields, {
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
