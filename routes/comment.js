const { Router } = require("express");

const { handlePostComment } = require("../controllers/comment");

const router = Router();

router.post("/add/:blogId", handlePostComment);

module.exports = router;


