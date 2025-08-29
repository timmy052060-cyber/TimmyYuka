const hamburger = document.querySelector(".burger")
const NavMenu = document.querySelector(".nav_menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    NavMenu.classList.toggle("active");

})