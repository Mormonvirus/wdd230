document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("meet-greet-banner");
    const closeBtn = document.getElementById("close-banner");

    const today = new Date().getDay();

    if (today >= 1 && today <= 3) {
        banner.classList.remove("hidden");
    }

    closeBtn.addEventListener("click", () => {
        banner.classList.add("hidden");
    });
});