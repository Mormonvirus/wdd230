
async function loadSpotlights() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();


        const spotlightCandidates = members.filter(member =>
            member.membership === "Gold" || member.membership === "Silver"
        );


        spotlightCandidates.sort(() => Math.random() - 0.5);

        const count = Math.floor(Math.random() * 2) + 2;
        const selected = spotlightCandidates.slice(0, count);

        const container = document.getElementById('spotlights-container');

        selected.forEach(member => {
            const spotlight = document.createElement('div');
            spotlight.classList.add('spotlight');
            spotlight.innerHTML = `
          <img src="images/avatar.png" alt="${member.name}" class="spotlight-img">
          <h3>${member.name}</h3>
          <p><strong>${member.membership} Member</strong></p>
          <p>${member.description}</p>
          <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        `;
            container.appendChild(spotlight);
        });
    } catch (err) {
        console.error('Error loading spotlight members:', err);
    }
}

loadSpotlights();

