import { API_AUCTION_URL } from "../constants.mjs"

const path = "/auth/register"
const method = "post"

export async function register(profile) {
    const registerURL = API_AUCTION_URL + path
    const response = await fetch(registerURL, {
        headers: {
            "Content-Type": "application/json"
        }, method,
        body: JSON.stringify(profile)
    })
    const result = await response.json()
    return result;
}