import { login } from "../features/auth.js";

export const setupSignup = () => {
  const button = document.querySelector("#signup");
  login(button);
};
