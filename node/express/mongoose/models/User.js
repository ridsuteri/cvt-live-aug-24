const mongoose = require('mongoose')
// 1. define the structure (SCHEMA)
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: String,
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);
// 2. give it a wrapper (MODEL)
const User = mongoose.model('User', userSchema);

// 3. export it to be used across other files
module.exports = User