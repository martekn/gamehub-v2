import { login } from "../features/auth.js";
const button = document.querySelector("#login");

export const setupLogin = () => {
  login(button);
};
