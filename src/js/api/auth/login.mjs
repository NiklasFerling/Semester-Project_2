import { API_AUCTION_URL } from "../constants.mjs"
import { save } from "../../storage/save.mjs"

const path = "/auth/login"
const method = "post"

export async function login(profile) {
    const loginURL = API_AUCTION_URL + path
    const response = await fetch(loginURL, {
        headers: {
            "Content-Type": "application/json"
        }, method,
        body: JSON.stringify(profile)
    })
    const { accessToken, ...user} = await response.json()
    save("token", accessToken)
    save("profile", user)
}