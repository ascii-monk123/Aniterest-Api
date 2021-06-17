const express = require("express");

const router = express.Router();

const PostController = require("../api/controllers/postController");

router.get("/posts", PostController.fetchPosts);

module.exports = router;
