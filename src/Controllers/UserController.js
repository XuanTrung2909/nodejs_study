const { users } = require("../models");
const bcryptjs = require("bcryptjs");

const createUser = async (req, res) => {
    try {
        const { name, email, password, phone, role } = req.body;

        /**
         * ma hoa password
         *
         *  1. tao ra mot chuoi ngau nhien: salt
         *  2. ma hoa password + salt
         */
        const salt = bcryptjs.genSaltSync(10);
        const hashPassword = bcryptjs.hashSync(password, salt);
        const newUser = await users.create({
            name,
            email,
            password: hashPassword,
            phone,
            role,
        });
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
};

const findAll = async (req, res) => {
    try {
        const userList = await users.findAll();
        res.status(200).send(userList);
    } catch (error) {
        res.status(500).send(error);
    }
};

const findUserDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const userDetail = await users.findByPk(id);
        res.status(200).send(userDetail);
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { detailInfo } = req;
        await users.destroy({
            where: {
                id,
            },
        });
        res.status(200).send(detailInfo);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        await users.update(data, {
            where: {
                id,
            },
        });
        res.status(200).send("cap nhat thanh cong");
    } catch (error) {
        res.status(500).send(error);
    }
};

const uploadAvatar = (req, res) => {
    res.send("da upload avatar thanh cong");
};

module.exports = {
    createUser,
    findAll,
    findUserDetail,
    deleteUser,
    updateUser,
    uploadAvatar,
};
