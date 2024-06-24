const Blog = require("../models/blog");

async function handleHomePage(req, res) {
    const allblogs = await Blog.find({}).populate("createdBy");
    return res.render("homepage", {
        user: req.user,
        blogs: allblogs,
    });
}

module.exports = {
    handleHomePage
}

