// Footer information
const year = new Date().getFullYear();

document.querySelector("#currentyear").textContent = year;

document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;


// Hamburger menu
const menuButton = document.querySelector("#menuButton");
const menuItems = document.querySelector("#menuItems");
const header = document.querySelector("header");

menuButton.addEventListener("click", () => {

    menuItems.classList.toggle("open");
    header.classList.toggle("menu-open");

    const isOpen = menuItems.classList.contains("open");

    if (isOpen) {
        menuButton.textContent = "X";
        menuButton.setAttribute("aria-label", "Close navigation menu");
        menuButton.setAttribute("aria-expanded", "true");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.setAttribute("aria-expanded", "false");
    }
});