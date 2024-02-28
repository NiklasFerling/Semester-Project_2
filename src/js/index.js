import { setRegisterFormListener } from "./api/handlers/register.mjs";
import { setLoginFormListener } from "./api/handlers/login.mjs";
import { profileBtn, renderProfileBtn } from "./templates/profileBtn.mjs";
import { card, renderCard } from "./templates/card.mjs";

import storage from "./storage/index.mjs";

import * as constants from "./api/constants.mjs"
import * as listings from "./api/listings/index.mjs"

setRegisterFormListener()
setLoginFormListener()

card(listings.getListings())
renderProfileBtn();
renderCard()