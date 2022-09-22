const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//comment Routes 

router.post("/createComment/:id", commentsController.createComment);

module.exports = router;