const menuBtn = document.querySelector(".menu-btn");
const mainNavItems = document.querySelector(".main-nav__items");
const mainNavItem = document.querySelectorAll(".main-nav__item");

menuBtn.addEventListener("click", () => {
  mainNavItems.classList.toggle("show");
});

mainNavItem.forEach((item) => {
  item.addEventListener("click", () => {
    mainNavItems.classList.toggle("show");
  });
});
