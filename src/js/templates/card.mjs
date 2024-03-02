import { getListings } from "../api/listings/get.mjs"

export function card(listing) {
    const card = document.createElement("a")
    card.classList.add("card", "col-lg-2", "col-md-3", "col-sm-6", "p-0", "rounded-0", "mb-3", "text-decoration-none")
    card.setAttribute("href", `/listing/?${listing.id}`)
    const img = document.createElement("img")
    img.setAttribute("src", listing.media[0])
    img.setAttribute("style", "height: 220px")
    const cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    const cardTitle = document.createElement("h5")
    cardTitle.classList.add("card-title")
    cardTitle.innerText = listing.title

    card.append(img)
    card.append(cardBody)
    cardBody.append(cardTitle)
    if (listing.bids.length > 0) {
        const biddersName = document.createElement("p")
        const bid = document.createElement("p")
        biddersName.innerText = "Current Bidder: " + listing.bids[0].bidderName
        
        cardBody.append(biddersName)
        cardBody.append(bid)
    } else {
        const biddersName = document.createElement("p")
        biddersName.innerText = "(no current bids)"
        
        cardBody.append(biddersName)

    }
    return card
}

export async function renderCards(container) {
    const array = await getListings()
    array.forEach(element => {
        container.append(card(element))
    });
}