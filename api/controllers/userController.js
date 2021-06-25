const users = require("../models/userModel");
const express = require("express");
const bcrypt = require("bcrypt");
const { use } = require("../../routes/userRoutes");

exports.fetchUserDetails = (req, res) => {
  const id = req.params.id;
  users.findById(id, (err, userDetails) => {
    if (err) {
      console.log(err);
      res.status(500).send(error);
    } else {
      res.status(200).json(userDetails);
    }
  });
};

exports.validateLogin = (req, res) => {
  const { username, password } = req.body;
  users
    .findOne({ username: username })
    .select("password")
    .exec(async (err, UserDetails) => {
      if (err) {
        res.status(500).send("User not found.");
      } else {
        const match = await bcrypt.compare(password, UserDetails.password);
        if (match) {
          res.status(200).send("<h1>Login Success</h1>");
        } else {
          res.status(500).send("Incorrect password");
        }
      }
    });
};

exports.createUser = (req, res) => {
  let { username, first_name, last_name, avatar, email, password } = req.body;
  users
    .findOne({ $or: [{ email: email }, { username: username }] })
    .then(async (user) => {
      if (user) {
        let errors = {};
        if (user.username === username) {
          errors.username = "Username already exists";
        } else {
          errors.email = "Email already exists";
        }
        return res.status(400).json(errors);
      } else {
        password = bcrypt.hashSync(password, 10);
        const userData = {
          username: username,
          first_name: first_name,
          last_name: last_name,
          avatar: avatar,
          email: email,
          password: password,
          friend_list: [],
        };
        const user = new users(userData);
        user
          .save()
          .then((data) => {
            res.status(200).json({ created: true });
          })
          .catch((err) => {
            res.status(500).json({ created: false, err: err });
          });
      }
    });
};
