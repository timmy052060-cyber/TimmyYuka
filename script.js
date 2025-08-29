const hamburger = document.querySelector(".burger")
const NavMenu = document.querySelector(".nav_menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    NavMenu.classList.toggle("active");
})

document.querySelectorAll(".nav_link").forEach(n => n.
    addEventListener("click"), () => {
        hamburger.classList.remove("active");
        NavMenu.classList.remove("active");
    }
)