import storage from "../../storage/index.mjs";
import { API_AUCTION_LISTINGS } from "../constants.mjs";
import { authFetch, headers } from "./fetch.mjs";

export async function postBid(id, amount) {
    const postBidUrl = "https://v2.api.noroff.dev/auction/listings/"
    const token = await storage.load("token")
    const APIKey = await storage.load("APIKey")
    const response = await fetch(postBidUrl + id + "/bids", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "X-Noroff-API-Key": APIKey

        },
        body: JSON.stringify({
            amount: amount
        })
    })
}