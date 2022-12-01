// This is just to mimic the idea of a proper login / account system

export const login = (button) => {
  button.addEventListener("click", (e) => {
    localStorage.setItem("auth", JSON.stringify("true"));
    location.href = "./account.html";
  });
};

export const logout = (button) => {
  button.addEventListener("click", (e) => {
    localStorage.setItem("auth", JSON.stringify("false"));
    location.href = "./index.html";
  });
};

const isLoggedIn = () => {
  const authStatus = JSON.parse(localStorage.getItem("auth"));
  const url = location.href.split("/");
  const page = url[url.length - 1];
  if (authStatus === "true") {
    const authPages = ["auth-login.html", "auth-signup.html", "auth-forgot.html"];

    if (authPages.includes(page)) {
      location.href = "./account.html";
    }
  } else {
    const accountPages = [
      "account.html",
      "account-settings.html",
      "library.html",
      "purchase-history.html",
      "sale-history.html",
      "purchase-checkout.html",
      "sale-checkout.html",
      "purchase-details.html",
      "sale-details.html",
      "sale-checkout.html",
    ];
    if (accountPages.includes(page)) {
      location.href = "./auth-login.html";
    }
  }
};

export const setupAuth = () => {
  isLoggedIn();
  const authLink = document.querySelector("#auth");
  const authIcon = document.querySelector("#auth-icon");
  const authText = document.querySelector("#auth-text");

  const authStatus = JSON.parse(localStorage.getItem("auth"));
  if (authLink) {
    if (authStatus === "true") {
      authLink.setAttribute("href", "./account.html");
      authIcon.innerText = "person";
      authText.innerText = "Account";
    } else {
      authLink.setAttribute("href", "./auth-login.html");
      authIcon.innerText = "login";
      authText.innerText = "log in";
    }
  }
};
