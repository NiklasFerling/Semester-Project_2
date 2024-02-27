import { load } from "../../storage/load.mjs"
import * as constants from "/src/js/api/constants.mjs"
const action = "/listings"

export async function createPost(postData) {
    const createListingURL = constants.API_AUCTION_URL + action
    const response = await fetch(createListingURL, {
        body: JSON.stringify(postData)
    })
}