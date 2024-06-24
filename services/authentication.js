const JWT = require("jsonwebtoken");

const secret = "49tkRocNboi5638lOHRhWWk4Pj9ISmsbvYVUoJSr0dPhe1DpqDr3J9xqBGcpRF6o7XCPh7qoC7MLYlYYGg1V";


function createTokenForUser(user){
    const payload = {
        _id: user._id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        profileImageUrl: user.profileImageUrl,
        role: user.role,
    };
    const token = JWT.sign(payload,secret);
    return token;
}

function validedToken(token){
    const payload = JWT.verify(token,secret);
    return payload;
}

module.exports = {
    createTokenForUser,
    validedToken
}