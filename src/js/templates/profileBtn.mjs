import { load } from "../storage/load.mjs"

export function profileBtn() {
    const user = load("user")
    const profileBtn = document.createElement("a")
    profileBtn.setAttribute("href", "/profile/")
    profileBtn.classList.add("btn", "btn-outline-primary")
    profileBtn.innerText = `${user.name} | Credits: ${user.credits}`
    return profileBtn
}

export function renderProfileBtn() {
    const nav = document.querySelector("nav")
    if(nav) {
        nav.append(profileBtn())
    }
}