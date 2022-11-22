import { updateTheme, getThemeFromLS } from "./features/theme.js";
import { openNav, closeNav } from "./features/mobile-nav.js";

// Nav toggle
const mobileOpenNav = document.querySelector("#mobile-hamburger");
const mobileCloseNav = document.querySelector("#mobile-close");
const nav = document.querySelector("#primary-navigation-wrapper");

if (mobileOpenNav) {
  mobileOpenNav.addEventListener("click", (e) => {
    openNav(mobileOpenNav, mobileCloseNav, nav);
  });
}

if (mobileCloseNav) {
  mobileCloseNav.addEventListener("click", (e) => {
    closeNav(mobileCloseNav, mobileOpenNav, nav);
  });
}

if (nav) {
  document.addEventListener("click", (e) => {
    if (
      nav.getAttribute("data-visible") === "true" &&
      e.target.closest("nav") !== nav &&
      e.target.closest("button") !== mobileOpenNav
    ) {
      closeNav(mobileCloseNav, mobileOpenNav, nav);
    }
  });
}

// Theme updates
const themeButton = document.querySelector("#theme-toggle");

getThemeFromLS(themeButton);
themeButton.addEventListener("click", () => {
  updateTheme(themeButton);
});
