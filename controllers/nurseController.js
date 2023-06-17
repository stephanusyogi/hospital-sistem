const bcrypt = require("bcryptjs");

const User = require("../models/users");

const createNurse = async (req, res) => {
  try {
    const { name, email, role, password } = req.body;

    if (!name || !email || !role || !password) {
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
    const nurses = await User.find({ role: { $ne: 'Dokter' }, accountActive: true });

    res.status(200).send(nurses);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getNurseById = async (req, res) => {
  try {
    const { id } = req.params;
    const nurse = await User.findById(id);

    if (!id) {
      throw new Error("User not found!");
    }

    res.status(200).send(nurse);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateNurse = async (req, res) => {
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

const updatePasswordNurse = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;
    const { currentPassword, newPassword } = req.body;

    if (userId.toString() !== id) {
      throw new Error("You can only update your account!");
    }

    const user = await User.findById(userId);

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

const deleteNurse = async (req, res) => {
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
  createNurse,
  getNurse,
  getNurseById,
  updateNurse,
  updatePasswordNurse,
  deleteNurse,
};
