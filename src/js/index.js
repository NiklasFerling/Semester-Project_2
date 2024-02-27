import { setRegisterFormListener } from "./api/handlers/register.mjs";
import { setLoginFormListener } from "./api/handlers/login.mjs";
import storage from "./storage/index.mjs";

import * as constants from "./api/constants.mjs"
import * as listings from "./api/listings/index.mjs"

setRegisterFormListener()
setLoginFormListener()