
window.onload = function () {
    const lastModifiedDate = document.lastModified;
    document.getElementById('last-modified').textContent = lastModifiedDate;
};

const visitMessage = document.getElementById('visitMessage');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const diffInMs = now - parseInt(lastVisit);
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (diffInDays === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        visitMessage.textContent = `You last visited ${diffInDays} days ago.`;
    }
}

// Update the latest visit date
localStorage.setItem('lastVisit', now);

// time stamp js
document.getElementById('timestamp').value = new Date().toISOString();
