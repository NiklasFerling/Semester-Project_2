import { load } from "../../storage/load.mjs";
import { API_AUCTION_LISTINGS } from "../constants.mjs";
import { authFetch, headers } from "./fetch.mjs";

export async function postBid(id, amount) {
    const postBidUrl = "https://v2.api.noroff.dev/auction/listings/"
    const token = await load("token")
    const response = await fetch(postBidUrl + id + "/bids", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            amount: amount
        })
    })
}

// Create API KEY...
// Not the same as accessToken