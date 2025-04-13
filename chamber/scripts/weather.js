
// Weather Elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');

const forecastEls = [
    document.querySelector('#forecast-day1'),
    document.querySelector('#forecast-day2'),
    document.querySelector('#forecast-day3')
];

// API Info
const apiKey = 'b4d25769c063a97655e4a41020cadc44';
const lat = 49.75;
const lon = 6.64;

const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

// Fetch and display current weather
async function fetchWeather() {
    try {
        const response = await fetch(currentWeatherURL);
        if (!response.ok) throw new Error(await response.text());
        const data = await response.json();
        displayCurrentWeather(data);
    } catch (error) {
        console.error('Error fetching current weather:', error);
    }
}

// Fetch and display 3-day forecast
async function fetchForecast() {
    try {
        const response = await fetch(forecastURL);
        if (!response.ok) throw new Error(await response.text());
        const data = await response.json();
        displayForecast(data);
    } catch (error) {
        console.error('Error fetching forecast:', error);
    }
}

function displayCurrentWeather(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)} °F`;
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconUrl);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    captionDesc.textContent = data.weather[0].description;
}

function displayForecast(data) {
    const dailyForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    for (let i = 0; i < 3; i++) {
        const day = dailyForecasts[i];
        if (day && forecastEls[i]) {
            const date = new Date(day.dt_txt);
            const weekday = date.toLocaleDateString(undefined, { weekday: 'short' });
            forecastEls[i].textContent = `${weekday}: ${day.main.temp.toFixed(1)} °F`;
        }
    }
}

// Run fetch functions
fetchWeather();
fetchForecast();
