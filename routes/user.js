const { Router } = require("express");

const {
    handleSignUpPage,
    handleSignUpProcess,
    handleSignInPage,
    handleSignInProcess,
    handleLogOut
} = require("../controllers/user");

const router = Router();

router.get("/signup", handleSignUpPage);
router.post("/signup", handleSignUpProcess);
router.get("/signin", handleSignInPage);
router.post("/signin", handleSignInProcess);
router.get("/logout", handleLogOut);

module.exports = router;