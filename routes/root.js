const { Router } = require("express");

const { handleHomePage } = require("../controllers/root");


const route = new Router();

route.get("/", handleHomePage);

module.exports = route;
