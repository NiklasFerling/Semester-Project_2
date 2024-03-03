import { load } from "../../storage/load.mjs"
import { authFetch } from "../auth/fetch.mjs"
import * as constants from "/src/js/api/constants.mjs"
const action = "/listings"
const method = "POST"

export async function createListing(listingData) {
    const createListingURL = constants.API_AUCTION_URL + action
    const token = await load("token")
    const response = await fetch(createListingURL, {
        method,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            "title": listingData.title,
            "description": listingData.description,
            "tags": listingData.tags.split("\\s+"),
            "media": [
                {
                    "url": listingData.media,
                    "alt": "Product image"
                }
            ],
            "endsAt": listingData.endsAt
        })
    })
}