import { load } from "../storage/load.mjs"

export function profileBtn() {
    const user = load("profile")
    const profileBtn = document.createElement("a")
    profileBtn.classList.add("btn", "btn-outline-primary")
    profileBtn.innerText = `${user.name} | Credits: ${user.credits}`
    return profileBtn
}

export function renderProfileBtn() {
    const nav = document.querySelector("nav")
    nav.append(profileBtn())
}