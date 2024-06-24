const User = require("../models/user");
const { createTokenForUser } = require("../services/authentication");

async function handleSignUpPage(req, res) {
    return res.render("signup");
}

async function handleSignUpProcess(req, res) {
    const { firstName, lastName, email, password } = req.body;
    
    await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    });

    return res.redirect("/");
}

async function handleSignInPage(req, res) {
    return res.render("signin");
}


async function handleSignInProcess(req, res) {
    const { email, password } = req.body;
    const result = await User.matchPassword(email, password);
    if (result.error) {
        return res.render("signin",({error: result.error}));
    }

    const token = createTokenForUser(result);
    // console.log(token);
    return res.cookie("token", token).redirect("/");
}

function handleLogOut(req, res){
    res.clearCookie("token").redirect("/");
}


module.exports = {
    handleSignUpPage,
    handleSignUpProcess,
    handleSignInPage,
    handleSignInProcess,
    handleLogOut
}