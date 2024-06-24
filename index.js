const express = require("express");
const path = require("path");
const cookieParser = require('cookie-parser');


const { connectToMongoDB } = require("./connections");
const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");
const commentRoute = require("./routes/comment");
const rootRoute = require("./routes/root");
const { checkForAuthenticationCookie } = require("./middlewares/auth");



const app = express();
const PORT = 8000;


const dburl = "mongodb://127.0.0.1:27017/adblogs";
connectToMongoDB(dburl).then(() => {
    console.log("MongoDb Connected...")
});


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


app.use(express.urlencoded({ extended:true }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve('./public')));


app.use("/user", userRoute);
app.use("/blog", blogRoute);
app.use("/comment", commentRoute);
app.use("/", rootRoute);


app.listen(PORT, () => {
    console.log(`Server started at ${PORT} ...`);
});