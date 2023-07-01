const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/users");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

      if (user) {
        // Comparing user password
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
          throw new Error("Password don't match");
        }

        if (!user.accountActive) {
          throw new Error("User account is currentyl innactive");
        }

        const token = jwt.sign(
        {
          userId: user._id,
          email: user.email
        },
        process.env.JWT_SECRET
      );

      res.status(200).send({ token, id: user.id, name: user.name, email: user.email, role: user.role });
    } else{
      throw new Error("Account Not Found!");
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  login,
};
