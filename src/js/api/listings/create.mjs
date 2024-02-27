import * as constants from "/src/js/api/constants.mjs"
const action = "/listings"

export async function createPost(id) {
    const createListingURL = constants.API_AUCTION_URL + action
    const response = await fetch(createListingURL)
}