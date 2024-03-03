import { API_AUCTION_URL } from "../constants.mjs"
import { save } from "../../storage/save.mjs"

const path = "/auth/login"
const method = "post"
const loginError = document.querySelector("#loginError")

export async function login(profile) {
    const loginURL = API_AUCTION_URL + path
    const response = await fetch(loginURL, {
        headers: {
            "Content-Type": "application/json"
        }, method,
        body: JSON.stringify(profile)
    })
    const json = await response.json()
    if(json.accessToken) {
        const { accessToken, ...user } = json
        save("token", accessToken)
        save("user", user)
        // window.location.href = "/home/"
    } else {
        loginError.innerText = json.errors[0].message
    }
}