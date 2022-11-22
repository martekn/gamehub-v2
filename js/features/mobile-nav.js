export const openNav = (openButton, closeButton, navContainer) => {
  navContainer.setAttribute("data-visible", true);
  openButton.setAttribute("aria-expanded", true);
  closeButton.setAttribute("aria-expanded", true);
  document.body.classList.add("o-hidden");
};

export const closeNav = (openButton, closeButton, navContainer) => {
  navContainer.setAttribute("data-visible", false);
  closeButton.setAttribute("aria-expanded", false);
  openButton.setAttribute("aria-expanded", false);
  document.body.classList.remove("o-hidden");
};
