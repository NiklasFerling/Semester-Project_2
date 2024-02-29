import { setRegisterFormListener } from "./api/handlers/register.mjs";
import { setLoginFormListener } from "./api/handlers/login.mjs";

import storage from "./storage/index.mjs";

import * as template from "./templates/index.mjs"
import * as constants from "./api/constants.mjs"
import * as listings from "./api/listings/index.mjs"

setRegisterFormListener()
setLoginFormListener()
template.renderProfileBtn()


async function testTemplate() {
    const array = await listings.getListings()
    const container = document.querySelector("#item-container")
    array.forEach(element => {
        console.log(element);
        template.renderCard(element, container)
    });
}
testTemplate()