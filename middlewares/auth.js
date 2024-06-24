const { validedToken } = require("../services/authentication");


function checkForAuthenticationCookie(cookieName){
    return (req, res, next) => {
        const tokenCoookieValue = req.cookies[cookieName];
        if (!tokenCoookieValue) {
            return next();
        }

        try {
            const payload = validedToken(tokenCoookieValue);
            req.user = payload;
        } catch (error) {}

        return next();
    }
}


module.exports = {
    checkForAuthenticationCookie,
}