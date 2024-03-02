import { authFetch } from "../auth/fetch.mjs"
import * as constants from "/src/js/api/constants.mjs"


export async function getListings() {
    const action = "/listings?_seller=true&_bids=true"
    const getListingURL = constants.API_AUCTION_URL + action
    const response = await authFetch(getListingURL)
    return await response.json()
}

export async function getListing(id) {
    if (!id) {
        throw new Error("id is required")
    }
    const action = "/listings"
    const getListingURL = constants.API_AUCTION_URL + action + "/" + id + "?_seller=true&_bids=true"
    const response = await authFetch(getListingURL)
    return await response.json()
}