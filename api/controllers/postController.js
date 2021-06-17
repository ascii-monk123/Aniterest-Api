//import TodoModel
const Posts = require("../models/postsModel");
const express = require("express");

exports.fetchPosts = (req, res) => {
  Posts.find({}, (error, posts) => {
    if (error) {
      console.log(error);
      res.status(500).send(error);
    } else {
      res.status(200).json(posts);
    }
  });
};
