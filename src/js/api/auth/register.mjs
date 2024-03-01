import { API_AUCTION_URL } from "../constants.mjs"

const path = "/auth/register"
const method = "post"
const registerError = document.querySelector("#registerError")
const registerSuccess = document.querySelector("#registerSuccess")

export async function register(profile) {
    const registerURL = API_AUCTION_URL + path
    const response = await fetch(registerURL, {
        headers: {
            "Content-Type": "application/json"
        }, method,
        body: JSON.stringify(profile)
    })
    const result = await response.json()
    if (result.errors) {
        registerError.innerText = result.errors[0].message
    } else {
        registerSuccess.classList.remove("d-none")
    }
}