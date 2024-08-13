// const elements = require("../utils/locators");
import * as elements from "../utils/locators";

async function login() {
    await $(elements.login.username).waitForExist();
    await $(elements.login.username).addValue("vjkachhi");
    await $(elements.login.password).addValue("12345678");
    await $(elements.login.signin).click();

    await $(elements.login.dashboardTitle).waitForExist();
}

module.exports = login;

