import { apiKey } from "../auth/apiKey.mjs";
import { login } from "../auth/login.mjs";
export function setLoginFormListener() {
  const form = document.querySelector("#logInForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      login(profile);
      apiKey();
    });
  }
}
