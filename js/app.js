import { updateTheme, getThemeFromLS } from "./features/theme.js";

const themeButton = document.querySelector("#theme-toggle");

getThemeFromLS(themeButton);

themeButton.addEventListener("click", () => {
  updateTheme(themeButton);
});
