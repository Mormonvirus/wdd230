// Visit Counter
let visits = localStorage.getItem('visitCount');
visits = visits ? parseInt(visits) + 1 : 1;
localStorage.setItem('visitCount', visits);
document.getElementById('visitCount').textContent = visits;

// Weather API
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=b4d25769c063a97655e4a41020cadc44';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(await response.text());
        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)} °F`;
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconUrl);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    captionDesc.textContent = data.weather[0].description;
}

apiFetch();
