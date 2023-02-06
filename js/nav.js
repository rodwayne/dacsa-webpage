const menu = document.querySelector(".menu");
const navToggle = document.querySelector(".mobile-nav-toggle");
const icon = document.querySelector(".mobile-icon");

navToggle.addEventListener("click", () => {
  const visibility = menu.getAttribute("data-visible");

  if (visibility === "false") {
    menu.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    icon.className = "fa-solid fa-xmark mobile-icon";
  } else if (visibility === "true") {
    menu.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    icon.className = "fa-solid fa-bars mobile-icon";
  }
});
