import storage from "../../storage/index.mjs"
import { API_AUCTION_URL } from "../constants.mjs";

export async function apiKey() {
  const apiKeyUrl = "https://v2.api.noroff.dev/auth/create-api-key";
  const token = await storage.load("token");
  const response = await fetch(apiKeyUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json()
  storage.save("APIKey", result.data)
}
