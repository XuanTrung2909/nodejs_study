const { tickets, users } = require("../models");

const getUserByTicket = async (req, res) => {
    const { id } = req.params;

    const ticketDetail = await tickets.findOne({
        where: {
            id,
        },
        include: [
            {
                model: users,
            },
        ],
    });
    res.send(ticketDetail);
};

module.exports = {
    getUserByTicket,
};
