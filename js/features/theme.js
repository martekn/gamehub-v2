/**
 * Toggles the theme
 * @param {HTMLElement} button or element with aria-pressed attribute
 * @param {*} themeState
 */
const toggleTheme = (button, themeState) => {
  const html = document.querySelector("html");
  button.setAttribute("aria-pressed", themeState);
  html.classList.toggle("dark");
};

/**
 * Fetches the theme from local storage and toggles the theme
 * @param {HTMLElement} button or element with aria-pressed attribute
 */
export const getThemeFromLS = (button) => {
  const themeState = JSON.parse(localStorage.getItem("theme"));

  if (themeState) {
    toggleTheme(button, themeState);
  }
};

/**
 * Updates the theme based on the aria-pressed attribute
 * @param {HTMLElement} button or element with aria-pressed attribute
 */
export const updateTheme = (button) => {
  const currentState = button.getAttribute("aria-pressed");
  const newState = currentState === "false";
  toggleTheme(button, newState);

  localStorage.setItem("theme", JSON.stringify(newState));
};
