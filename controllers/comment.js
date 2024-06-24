const Comment = require("../models/comment");

async function handlePostComment(req, res) {
    const { content } = req.body;
    const blogId = req.params.blogId;
    const userId = req.user._id;

    await Comment.create({
        content: content,
        blogId:blogId,
        createdBy: userId,
    });

    return res.redirect(`/blog/${blogId}`);
}

module.exports = {
    handlePostComment,
}