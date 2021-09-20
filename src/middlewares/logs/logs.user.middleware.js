const logUser = (req, res, next) => {
    console.log("day la tinh nang lay danh sach nguoi dung");
    next();
};

module.exports = {
    logUser,
};
