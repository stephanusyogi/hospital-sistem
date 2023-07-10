const bcrypt = require("bcryptjs");

const User = require("../models/users");

const createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
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
      role:'Admin',
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

const getAdmin = async (req, res) => {
  try {
    const Admins = await User.find({ role: { $ne: 'Admin' }, accountActive: true });

    res.status(200).send(Admins);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getAdminById = async (req, res) => {
  try {
    const { id } = req.params;
    const Admin = await User.findById(id);

    if (!id) {
      throw new Error("User not found!");
    }

    res.status(200).send(Admin);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;

    if (userId.toString() !== id) {
      throw new Error("You can only update your account!");
    }

    const updatedFields = req.body;

    const updatedUser = await User.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ user: updatedUser });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updatePasswordAdmin = async (req, res) => {
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

const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;

    if (userId.toString() !== id) {
      throw new Error("You can only delete your account!");
    }

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
  createAdmin,
  getAdmin,
  getAdminById,
  updateAdmin,
  updatePasswordAdmin,
  deleteAdmin,
};
