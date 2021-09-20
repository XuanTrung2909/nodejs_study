const checkExit = (model) => async (req, res, next) => {
    try {
        const { id } = req.params;
        const detail = await model.findByPk(id);
        if (detail) {
            req.detailInfo = detail;
            next();
        } else {
            res.status(404).send({
                messsage: "User khong ton tai",
            });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    checkExit,
};
