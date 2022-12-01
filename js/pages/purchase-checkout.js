// import { logout } from "../features/auth.js";

const checkLoggedInState = () => {
  const authStatus = JSON.parse(localStorage.getItem("auth"));
  if (authStatus === "false") {
    location.href = "auth-login.html";
  }
};

export const setupPurchaseCheckout = () => {
  checkLoggedInState();
};
