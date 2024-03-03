import { authFetch } from "../auth/fetch.mjs"
import * as constants from "/src/js/api/constants.mjs"
const action = "/listings"
const method = "DELETE"

export async function removeListing(id) {
    if (!id) {
        throw new Error("id is required")
    }
    const removeListingURL = constants.API_AUCTION_URL + action + "/" + id
    const response = await authFetch(removeListingURL, method)
}