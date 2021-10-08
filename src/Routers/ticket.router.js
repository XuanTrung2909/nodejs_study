const express = require("express");
const { getUserByTicket } = require("../Controllers/ticket.controller");

const ticketRouter = express.Router();

ticketRouter.get("/user-by-ticket/:id", getUserByTicket);

module.exports = {
    ticketRouter,
};
