const { Router } = require("express");


const upload = require("../services/uploadhandle");


const {
  handlePublishBlogPage,
  handlePublishBlogRequest,
  handleGetBlogPage
} = require("../controllers/blog");

const router = Router();





router.get("/add", handlePublishBlogPage);
router.post("/add", upload.single('blogCoverImage'), handlePublishBlogRequest);
router.get("/:id", handleGetBlogPage);


module.exports = router;
