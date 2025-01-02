const express = require("express");
const { login } = require("../controller/authController");
const {addUser} = require('../controller/userController')
const router = express.Router();

router.post("/login", login);
router.post("/register", addUser);

module.exports = router;
