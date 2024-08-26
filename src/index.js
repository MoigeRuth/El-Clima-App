function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;

  let cityElement = document.querySelector("#app-city");
  cityElement.innerHTML = response.data.city;

  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "fac6b53013d70a3f4td35cdffa8c4oea";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form-area");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Nairobi");
