function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form");
  let cityElement = document.querySelector("#app-city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form-area");
searchFormElement.addEventListener("submit", handleSearchSubmit);
