
document.getElementById('currentYear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;

// main.js

// Get elements
const hamburgerMenu = document.getElementById("hamburgerMenu");
const menuItems = document.getElementById("menuItems");
const darkModeToggle = document.getElementById("darkModeToggle");
const main = document.querySelector("main");

// Toggle menu visibility on click (Hamburger)
hamburgerMenu.addEventListener("click", () => {
    menuItems.classList.toggle("visible");
    hamburgerMenu.textContent = hamburgerMenu.textContent === "≡" ? "✖" : "≡";
});

// Toggle dark mode
darkModeToggle.addEventListener("click", () => {
    main.classList.toggle("dark-mode");
});

// Set current year and last modified date dynamically
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;


