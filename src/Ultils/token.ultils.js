const jwt = require("jsonwebtoken");

const generateToken = (id, email, role) => {
    const payload = {
        id,
        email,
        role,
    };
    const secreKey = "nodejs-sang-01";
    const token = jwt.sign(payload, secreKey, {
        expiresIn: 60 * 60 * 24 * 30, // tinh don vi la giay
    });
    return token;
};

module.exports = {
    generateToken,
};
