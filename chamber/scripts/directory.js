
const directory = document.getElementById("directory");
const gridBtn = document.getElementById("grid-view");
const listBtn = document.getElementById("list-view");

fetch("data/members.json")
    .then((response) => response.json())
    .then((members) => {
        members.forEach((member) => {
            const card = document.createElement("section");
            card.classList.add("member-card");

            card.innerHTML = `
          <img src="images/${member.image}" alt="${member.name} logo">
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <a href="${member.website}" target="_blank">${member.website}</a>
          <p class="level">${member.membership} Member</p>
          <p>${member.description}</p>
        `;

            directory.appendChild(card);
        });
    });

gridBtn.addEventListener("click", () => {
    directory.classList.add("grid-view");
    directory.classList.remove("list-view");
});

listBtn.addEventListener("click", () => {
    directory.classList.add("list-view");
    directory.classList.remove("grid-view");
});
