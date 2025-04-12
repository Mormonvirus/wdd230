
const baseURL = "https://mormonvirus.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;
a
async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data);
    } catch (error) {
        console.error("Error loading links:", error);
    }
}

getLinks();

function displayLinks(weeks) {
    const activityList = document.getElementById("activityLinks");

    weeks.forEach(week => {
        const li = document.createElement("li");
        li.textContent = `${week.week}: `;

        week.links.forEach((link, index) => {
            const a = document.createElement("a");
            a.href = link.url;
            a.textContent = link.title;

            li.appendChild(a);


            if (index < week.links.length - 1) {
                li.append(" | ");
            }
        });

        activityList.appendChild(li);
    });
}
