"use-strict";
const mongoose = require("mongoose");
//schema object
const schema = mongoose.Schema;
//posts schema for profile posts
const PostSchema = new schema({
  text: String,
  imageUrl: {
    type: String,
    required: true,
  },
  comments: [
    {
      imageUrl: String,
      comment_text: { type: String },
      user_name: String,
    },
  ],
  profile: {
    type: {
      user_name: { type: String },
      profile_img: { type: String },
    },
  },
});

module.exports = mongoose.model("postModel", PostSchema, "posts");
