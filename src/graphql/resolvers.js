const { users } = require("../models");

const graphqlResolver = {
    async user({ id }) {
        const userDetail = await users.findByPk(id);
        return userDetail;
    },
};

module.exports = {
    graphqlResolver,
};
