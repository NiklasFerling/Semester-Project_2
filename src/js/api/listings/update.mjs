import { authFetch } from "../auth/fetch.mjs"
import * as constants from "/src/js/api/constants.mjs"
const action = "/listings"
const method = "PUT"

export async function updateListing(listingData) {
    if (!listingData.id) {
        throw new Error("listingData.id is required")
    }
    const updateListingURL = constants.API_AUCTION_URL + action + "/" + listingData.id
    const response = await authFetch(updateListingURL, {
        method,
        body: JSON.stringify(listingData)
    })
    const result = await response.json()
    console.log(result)
}