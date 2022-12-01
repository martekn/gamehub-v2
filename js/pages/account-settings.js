import { logout } from "../features/auth.js";

export const setupAccountSettings = () => {
  const button = document.querySelector("#logout");
  logout(button);
};
