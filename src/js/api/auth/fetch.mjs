import { load } from "../../storage/load.mjs"

export function headers() {
    const token = load("token")
}
export async function authFetch(url, options = {}) {
    return fetch(url, {
        ...options
    })
}