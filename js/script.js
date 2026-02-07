//toggle class active
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#menu-cart").addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});

// klik di lusar sidebar //

const menu = document.querySelector("#menu-cart");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
