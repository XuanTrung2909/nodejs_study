const { users } = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../Ultils/token.ultils");

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        /**
         * các bước xác thực :
         *      1/ tìm user theo cái email
         *      2/ kiểm tra password
         */
        const userSignIn = await users.findOne({
            where: {
                email,
            },
        });

        if (userSignIn) {
            console.log("check");
            const isCheckPassword = bcryptjs.compareSync(
                password,
                userSignIn.password
            );
            console.log("check");
            if (isCheckPassword) {
                // tạo token

                const token = generateToken(
                    userSignIn.id,
                    userSignIn.email,
                    userSignIn.role
                );
                res.status(200).send({
                    message: "Đăng nhập thành công",
                    token,
                });
            } else {
                console.log("fale", isCheckPassword);
                res.status(400).send({
                    message: "Mật Khẩu ko chính xác",
                });
            }
        } else {
            res.status(404).send({
                message: "không tìm thấy email phù hợp",
            });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    signIn,
};
