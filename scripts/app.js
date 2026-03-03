// mobile navigation
const burgerBtn = document.querySelector("#burgerBtn");
const mobileNav = document.querySelector("#mobileNavId");

burgerBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("activeMenu");
  burgerBtn.classList.toggle("activeBurger");
});
// ---------------------------------------
