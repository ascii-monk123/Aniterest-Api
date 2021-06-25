const express = require("express");

const router = express.Router();

const PostController = require("../api/controllers/postController");
const userController = require("../api/controllers/userController");

router.get("/posts", PostController.fetchPosts);
router.get("/users/:id", userController.fetchUserDetails);
router.post("/login", userController.validateLogin);
router.post("/new-user", userController.createUser);

module.exports = router;
