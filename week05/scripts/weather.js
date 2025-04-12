
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=b4d25769c063a97655e4a41020cadc44';


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        displayResults(data);
    } catch (error) {
        console.error('Fetch error:', error.message);
    }
}
function displayResults(data) {
    const temp = data.main?.temp;
    const weather = data.weather?.[0];

    if (!temp || !weather) {
        console.error("Invalid data format", data);
        return;
    }

    currentTemp.innerHTML = `${temp.toFixed(1)} &deg;F`;

    const iconCode = weather.icon;
    const description = weather.description;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    weatherIcon.setAttribute('src', iconUrl);
    weatherIcon.setAttribute('alt', description);
    captionDesc.textContent = description;
}


apiFetch();
