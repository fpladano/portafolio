const menuBtn = document.querySelector(".menu-btn");
const mainNav = document.querySelector(".main-nav");
const navItem = document.querySelector(".main-nav__items li");
const exitMenuBtn = document.querySelector(".exit-menu-btn");

window.addEventListener("load", () => {
  mainNav.classList.remove("aos-animate");
});

menuBtn.addEventListener("click", () => {
  mainNav.classList.add("aos-animate");
});

exitMenuBtn.addEventListener("click", () => {
  mainNav.classList.remove("aos-animate");
});
