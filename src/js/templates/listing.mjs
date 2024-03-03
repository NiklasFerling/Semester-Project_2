import { postBid } from "../api/auth/postBid.mjs";
import { getListing } from "../api/listings/get.mjs";
import { amount } from "../api/utilities/sort.mjs";

function renderBid(bid) {
    const someBid = document.createElement("p")
    someBid.classList.add("row", "ms-2")
    someBid.innerText = bid.bidderName + ": " + bid.amount + ",-"
    return someBid
}

export async function itemPage() {
    const parameterString = window.location.search;
    const id = parameterString.replace("?", "");
    const listing = await (getListing(id))
    const sortedBids = await amount(listing.bids)
    const highestBid = sortedBids[sortedBids.length - 1]

    const page = document.createElement("div")
    page.classList.add("row", "gap-5")
    const imgContainer = document.createElement("div")
    const detailContainer = document.createElement("div")
    imgContainer.classList.add("col-12", "col-lg")
    detailContainer.classList.add("col-12", "col-lg")
    page.append(imgContainer)
    page.append(detailContainer)

    const img = document.createElement("img")
    img.setAttribute("src", listing.media[0])
    img.setAttribute("alt", "Product image")
    img.classList.add("w-100")
    imgContainer.append(img)

    const itemName = document.createElement("h2")
    itemName.classList.add("mb-4")
    itemName.innerText = listing.title
    detailContainer.append(itemName)

    const auctioneer = document.createElement("div")
    auctioneer.classList.add("row", "border", "border-primary", "mb-4", "p-3")
    const auctioneerCol = document.createElement("div")
    auctioneerCol.classList.add("col-auto")
    const auctioneerName = document.createElement("p")
    auctioneerName.classList.add("fs-5", "m-0")
    auctioneerName.innerText = listing.seller.name
    const listedAt = document.createElement("p")
    listedAt.classList.add("m-0")
    const listedDate = new Date(listing.created)
    const readableListedDate = listedDate.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })
    listedAt.innerText = "Listed: " + readableListedDate
    const expiresAt = document.createElement("p")
    expiresAt.classList.add("m-0")
    const expiresAtDate = new Date(listing.endsAt)
    const readableExpiresAtDate = expiresAtDate.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" })
    expiresAt.innerText = "Expires: " + readableExpiresAtDate

    auctioneerCol.append(auctioneerName)
    auctioneerCol.append(listedAt)
    auctioneerCol.append(expiresAt)
    auctioneer.append(auctioneerCol)
    detailContainer.append(auctioneer)

    const itemDescriptionRow = document.createElement("div")
    itemDescriptionRow.classList.add("row", "border", "border-primary", "mb-4", "p-3")
    const itemDescription = document.createElement("p")
    itemDescription.classList.add("fs-5")
    itemDescription.innerText = "Item Description"
    const itemDescriptionBody = document.createElement("p")
    itemDescriptionBody.innerText = listing.description
    itemDescriptionRow.append(itemDescription)
    itemDescriptionRow.append(itemDescriptionBody)
    detailContainer.append(itemDescriptionRow)

    const bid = document.createElement("form")
    bid.classList.add("p-0", "row", "mb-3", "gap-3")
    bid.setAttribute("id", "bidForm")
    const bidInput = document.createElement("input")
    const placeBid = document.createElement("button")
    bidInput.classList.add("col", "form-control", "fs-3", "text-end", "text-primary", "border-primary")
    bidInput.setAttribute("type", "number")
    const minBid = highestBid.amount + 1
    bidInput.setAttribute("placeholder", "min bid: " + minBid)
    placeBid.classList.add("btn", "btn-primary", "fs-3", "col")
    placeBid.innerText = "Place Bid"
    bid.append(bidInput)
    bid.append(placeBid)
    detailContainer.append(bid)

    bid.addEventListener("submit", event => {
        event.preventDefault()
        postBid(listing.id, bidInput.value)
    })

    const currentBidderRow = document.createElement("div")
    currentBidderRow.classList.add("row", "border", "border-primary", "mb-4", "p-3")
    const currentBidderCol = document.createElement("div")
    currentBidderCol.classList.add("col-auto")
    const bidderName = document.createElement("p")
    const bidInfo = document.createElement("p")
    bidderName.classList.add("fs-5", "m-0")
    bidderName.innerText = "Current bidder: " + highestBid.bidderName
    bidInfo.classList.add("m-0")
    const bidDate = new Date(highestBid.created)
    const readableBidDate = bidDate.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })
    bidInfo.innerText = highestBid.amount + ",-" + " | " + readableBidDate
    currentBidderCol.append(bidderName)
    currentBidderCol.append(bidInfo)
    currentBidderRow.append(currentBidderCol)
    detailContainer.append(currentBidderRow)

    const biddingHistoryRow = document.createElement("div")
    biddingHistoryRow.classList.add("row", "border", "border-primary", "mb-4", "p-3")
    detailContainer.append(biddingHistoryRow)
    const biddingHistoryTitle = document.createElement("p")
    biddingHistoryTitle.classList.add("fs-5", "row", "ms-2", "p-0")
    biddingHistoryTitle.innerText = "Bidding History"
    biddingHistoryRow.append(biddingHistoryTitle)

    sortedBids.forEach(element => {
        biddingHistoryRow.append(renderBid(element))
    });

    return page
}

export async function renderItemPage() {
    const container = document.querySelector(".container")
    container.append(await itemPage())
}