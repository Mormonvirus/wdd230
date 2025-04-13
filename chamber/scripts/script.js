
window.onload = function () {
    const lastModifiedDate = document.lastModified;
    document.getElementById('last-modified').textContent = lastModifiedDate;
};


// Update the latest visit date
localStorage.setItem('lastVisit', now);

// time stamp js
document.getElementById('timestamp').value = new Date().toISOString();
