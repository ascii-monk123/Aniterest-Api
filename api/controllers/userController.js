const users = require("../models/userModel");
const express = require("express");

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
