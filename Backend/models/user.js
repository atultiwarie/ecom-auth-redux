const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [2,'Name must be at least 2 character long']
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: [6, 'Password must be at least 6 characters long']
    },
    userName: {
      type: String,
      required: true,
      minLength: [2, 'Username must be at least 2 characters long']
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
