import { authFetch } from "../auth/fetch.mjs"
import * as constants from "/src/js/api/constants.mjs"

const action = "/listings?_seller=true&_bids=true"

export async function getListings() {
    const getListingURL = constants.API_AUCTION_URL + action
    const response = await authFetch(getListingURL)
    return await response.json()
}

export async function getListing(id) {
    if (!id) {
        throw new Error("id is required")
    }
    const getListingURL = constants.API_AUCTION_URL + action + "/" + id
    const response = await authFetch(getListingURL)
    const result = await response.json()
    console.log(result);
}