const baseURL = "https://mormonvirus.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) throw new Error(await response.text());
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error("Failed to fetch links:", error);
    }
}

function displayLinks(weeks) {
    const list = document.querySelector("#activityLinks");
    list.innerHTML = ""; // clear existing content

    weeks.forEach((week) => {
        const weekItem = document.createElement("li");
        weekItem.textContent = `${week.week}: `;

        week.links.forEach((link, index) => {
            const a = document.createElement("a");
            a.href = link.url;
            a.textContent = link.title;

            weekItem.appendChild(a);

            // Add separator if not last link
            if (index < week.links.length - 1) {
                const separator = document.createTextNode(" | ");
                weekItem.appendChild(separator);
            }
        });

        list.appendChild(weekItem);
    });
}

getLinks();
