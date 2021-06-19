"use-strict";
const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchame = new schema({
  username: String,
  first_name: String,
  last_name: String,
  avatar: String,
  email: String,
  password: {
    type: String,
    required: true,
    select: false,
  },
  friend_list: [
    {
      user_id: schema.Types.ObjectId,
      username: String,
      first_name: String,
      last_name: String,
      profile_url: String,
    },
  ],
});

module.exports = mongoose.model("userModel", userSchame, "users");
