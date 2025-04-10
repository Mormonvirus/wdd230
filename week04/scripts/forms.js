
const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" }
];

function populateProductOptions() {
    const productSelect = document.getElementById("product-name");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

document.addEventListener("DOMContentLoaded", populateProductOptions);


function incrementReviewCounter() {
    let reviewCounter = localStorage.getItem("reviewCounter");
    reviewCounter = reviewCounter ? parseInt(reviewCounter, 10) : 0;

    reviewCounter += 1;
    localStorage.setItem("reviewCounter", reviewCounter);

    const counterElement = document.getElementById("review-counter");
    if (counterElement) {
        counterElement.textContent = `Reviews Completed: ${reviewCounter}`;
    }
}

if (window.location.pathname.includes("review.html")) {
    document.addEventListener("DOMContentLoaded", incrementReviewCounter);
}

document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll(".stars input[type='radio']");
    const labels = document.querySelectorAll(".stars label");

    function resetStars() {
        labels.forEach(label => {
            label.style.color = "#ccc";
        });
    }

    stars.forEach(star => {
        star.addEventListener("change", () => {
            resetStars();
            const checkedLabel = document.querySelector(`label[for="${star.id}"]`);
            if (checkedLabel) {
                checkedLabel.style.color = "#f5c518";
            }
        });
    });
});