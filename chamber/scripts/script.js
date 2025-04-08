
const hamburger = document.querySelector('.hamburger-menu');
const nav = document.querySelector('header nav ul');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});
// scripts/main.js
window.onload = function () {
    const lastModifiedDate = document.lastModified;
    document.getElementById('last-modified').textContent = lastModifiedDate;
};
