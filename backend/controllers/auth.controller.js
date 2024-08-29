const User = require("../models/user.model");
class authController {
  register = async (req, res) => {
    try {
      const { email, password, username } = req.body;
      const user = new User({ email, password, username });
      console.log(user);
    } catch (error) {
      console.error("Error in register user: ", error);
      res.status(500).send({ message: "Error in register user" });
    }
  };
}
module.exports = new authController();
