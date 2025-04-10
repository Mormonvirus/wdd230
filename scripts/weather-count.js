let visits = localStorage.getItem('visitCount');
visits = visits ? parseInt(visits) + 1 : 1;
localStorage.setItem('visitCount', visits);
document.getElementById('visitCount').textContent = visits;

// --- Simulated Weather Info ---
// (Replace this with real API fetch if desired)
const weatherData = {
    temperature: "72°F",
    condition: "Sunny",
    city: "Salt Lake City"
};

document.getElementById('weather').textContent =
    `${weatherData.city}: ${weatherData.temperature} and ${weatherData.condition}`;