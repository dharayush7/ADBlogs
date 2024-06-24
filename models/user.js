const { Schema, model } = require("mongoose");
const { createHmac, randomBytes } = require("crypto");


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    salt: {
        type: String,

    },
    profileImageUrl: {
        type: String,
        default: '/images/defaultAvater.svg',
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER",
    },
}, { timestapms: true, },
);


userSchema.pre("save", function (next) {
    const user = this;

    if (!user.isModified("password")) return;

    const salt = randomBytes(16).toString();
    const hashPassword = createHmac('sha256', salt).update(user.password).digest("hex");

    this.salt = salt;
    this.password = hashPassword;
    next();
});


userSchema.static("matchPassword", async function (email, password) {
    const user = await this.findOne({ email });
    if (!user) return ({ error: "User not found!" });

    const salt = user.salt;
    const hashedPassword = user.password;

    const userProvidedHash = createHmac("sha256", salt).update(password).digest("hex");

    if (hashedPassword !== userProvidedHash) return ({ error: "Paaword incorrect" });

    return user;
});

const User = model('user', userSchema);

module.exports = User;