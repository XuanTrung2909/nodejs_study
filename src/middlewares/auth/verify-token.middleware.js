const jwt = require("jsonwebtoken");

// kiem tra nguoi dung co dang nhap hay chua

const authenticate = (req, res, next) => {
    const token = req.header("token");
    try {
        const secreKey = "nodejs-sang-01";
        const decode = jwt.verify(token, secreKey);
        req.user = decode;
        next();
    } catch (error) {
        res.status(401).send({
            message: "ban chua dang nhap",
        });
    }
};

const authorize = (arrayRole) => (req, res, next) => {
    try {
        const { user } = req;
        if (arrayRole.includes(user.role)) {
            next();
        } else {
            res.status(403).send({
                message: "User khong co quyen nay",
            });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    authenticate,
    authorize,
};
