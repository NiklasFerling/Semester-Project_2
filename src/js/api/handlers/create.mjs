import { createListing } from "../listings/create.mjs";

const form = document.querySelector("#createListing")

export function setCreateListingFormListener() {
    if (form) {
        form.addEventListener("submit", event => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const listingData = Object.fromEntries(formData.entries());
            createListing(listingData)
        })
    }
}