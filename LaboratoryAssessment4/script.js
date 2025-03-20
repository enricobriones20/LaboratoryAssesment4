const apiKey = "d628e4fe2ae86af37f9eeadaf4e0a3ba";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "img/clouds.jpg";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "img/clear.jpg";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "img/rain.jpg";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "img/drizzle.jpg";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "img/mist.jpg";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}


searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
});


checkweather("London");
