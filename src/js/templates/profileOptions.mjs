import { load } from "../storage/load.mjs"
import { remove } from "../storage/remove.mjs"

export function profileBtn() {
    const user = load("user")
    if(user){
    const profileBtn = document.createElement("a")
    profileBtn.setAttribute("href", "/profile/")
    profileBtn.classList.add("btn", "btn-outline-primary", "me-2")
    profileBtn.innerText = `${user.name} | Credits: ${user.credits}`
    return profileBtn
} else {
    const signInBtn = document.createElement("a")
    signInBtn.setAttribute("href", "/")
    signInBtn.classList.add("btn", "btn-outline-primary", "me-2")
    signInBtn.innerText = "Sign In"
    return signInBtn
}
}

export function signOut() {
    const signOutBtn = document.createElement("button")
    signOutBtn.classList.add("btn", "btn-outline-danger")
    signOutBtn.innerText = "Sign Out"
    signOutBtn.addEventListener("click", event => {
    remove("APIKey")
    remove("token")
    remove("user")
    window.location.pathname = "/"
    })
    return signOutBtn
}

export function renderProfileOptions() {
    const nav = document.querySelector("nav")
    if(nav) {
        const user = load("user")
        if (user) {
            const profileOptions = document.createElement("div")
            profileOptions.append(profileBtn())
            profileOptions.append(signOut())
            nav.append(profileOptions)
        } else {
            nav.append(profileBtn())
        }
    }
}