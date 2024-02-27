import { setRegisterFormListener } from "./api/handlers/register.mjs";
import { setLoginFormListener } from "./api/handlers/login.mjs";
import * as constants from "./api/constants.mjs"
import storage from "./storage/index.mjs";

setRegisterFormListener()
setLoginFormListener()