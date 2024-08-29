const generateToken = require("../middlewares/generateToken");
const User = require("../models/user.model");
class authController {
  register = async (req, res) => {
    try {
      const { email, password, username } = req.body;
      const user = new User({ email, password, username });
      await user.save();
      res.status(200).send({ message: "User Registered successfully", user });
    } catch (error) {
      console.error("Error in register user: ", error);
      res.status(500).send({ message: "Error in register user" });
    }
  };
  login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(401).send({ message: "Wrong password" });
      }
      const token = await generateToken(user._id);
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: true,
      });
      res.status(200).send({
        message: "Login successfully",
        token,
        user: {
          id: user._id,
          email: user.email,
          username: user.username,
          role: user.role,
        },
      });
    } catch (error) {
      console.error("Error in login user: ", error);
      res.status(500).send({ message: "Error in login user" });
    }
  };
  logout= async(req,res)=>{
    console.log('logout');
  }
}
module.exports = new authController();
