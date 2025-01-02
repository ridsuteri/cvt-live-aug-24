const User = require("../models/User");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    let loginObj = req.body;
    console.log(loginObj);
    if (loginObj.username && loginObj.password) {
      let result = await User.findOne({
        username: loginObj.username,
      });

      if (result) {
        let match = await bcrypt.compare(loginObj.password, result.password)
        if (match) {
          res.status(200).json({ data: "user logged in successfully" });
        } else {
          res.status(400).json({ data: "incorrect password" });
        }
      } else {
        res.status(404).json({ data: "user doesn't exist" });
      }
    }
  } catch (err) {
    res.status(500).json({ data: `something went wrong: ${err}` });
  }
};

module.exports = { login };
