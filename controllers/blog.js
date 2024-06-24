const Blog = require("../models/blog");
const Comment = require("../models/comment");

function handlePublishBlogPage(req, res) {
    return res.render("adblog",{ user: req.user });
}

async function handlePublishBlogRequest(req, res) {
    const { title, body } = req.body
    const blog = await Blog.create({
        title,
        body,
        createdBy: req.user._id,
        coverImageURL: `/uploads/${req.file.filename}`,
    });
    res.redirect(`/blog/${blog._id}`);
}

async function handleGetBlogPage(req, res){
    const id = req.params.id;
    const blog = await Blog.findById(id).populate("createdBy");
    const comments = await Comment.find({ blogId: id }).populate("createdBy");

    return res.render("blog", {
        user: req.user,
        blog: blog,
        comments: comments,
    });
}


module.exports = {
    handlePublishBlogPage,
    handlePublishBlogRequest,
    handleGetBlogPage
}