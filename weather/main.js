// main.js

const apiKey = "YOUR_API_KEY_HERE";
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherInfo = document.getElementById("weatherInfo");
const errorMsg = document.getElementById("errorMsg");

async function getWeather(city) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    if (response.status === 404 || data.cod === "404") {
      weatherInfo.classList.add("hidden");
      errorMsg.classList.remove("hidden");
      return;
    }

    // Display results
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    description.textContent = `Weather: ${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;

    errorMsg.classList.add("hidden");
    weatherInfo.classList.remove("hidden");
  } catch (error) {
    console.error("Error fetching weather:", error);
    errorMsg.textContent = "Unable to fetch weather. Try again later.";
    errorMsg.classList.remove("hidden");
    weatherInfo.classList.add("hidden");
  }
}

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  }
});
