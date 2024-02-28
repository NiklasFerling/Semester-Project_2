import { authFetch } from "../auth/fetch.mjs"
import * as constants from "/src/js/api/constants.mjs"
const action = "/listings"
const method = "POST"

export async function createListing(listingData) {
    const createListingURL = constants.API_AUCTION_URL + action
    const response = await authFetch(createListingURL, {
        method,
        body: JSON.stringify(listingData)
    })
    const result = await response.json()
    console.log(result);
}