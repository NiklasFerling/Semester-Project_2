import { setRegisterFormListener } from "./api/handlers/register.mjs";
import { setLoginFormListener } from "./api/handlers/login.mjs";
import { setCreateListingFormListener } from "./api/handlers/create.mjs";

import storage from "./storage/index.mjs";

import * as template from "./templates/index.mjs"
import * as constants from "./api/constants.mjs"
import * as listings from "./api/listings/index.mjs"
import * as sort from "./api/utilities/sort.mjs"

setRegisterFormListener()
setLoginFormListener()
setCreateListingFormListener()
template.renderProfileOptions()

if (window.location.pathname === "/listing/") {
    template.renderItemPage()
}

const itemContainer = document.querySelector("#item-container")
if(itemContainer) {
    template.renderCards(itemContainer)
}