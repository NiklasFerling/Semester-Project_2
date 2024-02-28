export function card(listing) {
    console.log(listing);
    const card = document.createElement("a")
    const img = document.createElement("img")
    // img.setAttribute("src", listing.media[0])
    card.classList.add("card", "col-lg-2", "col-md-3", "col-sm-6", "p-0", "rounded-0", "mb-3", "text-decoration-none")
}

export function renderCard() {
    const container = document.querySelector("#item-container")
}