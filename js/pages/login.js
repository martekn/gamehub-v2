import { login } from "../features/auth.js";

export const setupLogin = () => {
  const button = document.querySelector("#login");
  login(button);
};
